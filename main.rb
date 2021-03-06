require 'rubygems'
require 'sinatra'
require "pry"

use Rack::Session::Cookie, :key => 'rack.session',
                           :path => '/',
                           :secret => 'niven'

BLACKJACK_AMOUNT = 21
DEALER_HIT_MIN = 17

helpers do 
  def calculate_total(cards)
    total = 0
    values_array = cards.map{|card| card[1]} 
    
    values_array.each do |value|
      if value == 'A'
        total += 11
      else
        total += value.to_i == 0? 10 : value.to_i
      end
    end
    
    #correct for aces 
    values_array.select {|value| value == 'A'}.count.times do 
      break if total <= BLACKJACK_AMOUNT
      total -= 10
    end
    total
  end
  
  def card_image(card)
    #get suit
    suit = case card[0]
      when 'H' then 'hearts'
      when 'D' then 'diamonds'
      when 'S' then 'spades'
      when 'C' then 'clubs'
    end
    
    #get value 
    value = card [1]
    if ['K', 'Q', 'J', 'A'].include?(value)
      value = case card[1]
        when 'K' then 'king'
        when 'Q'then 'queen'
        when 'J' then 'jack'
        when 'A' then 'ace'
      end
    end
    "<img src='/images/cards/#{suit}_#{value}.jpg' class='card_image'>"
  end
  
  def loser!(msg)
    @loser = "<strong>#{session[:player_name]} loses $#{session[:bet_amount]}!</strong> #{msg}"
    session[:cash_on_hand] -= session[:bet_amount]
    @show_hit_or_stay_buttons = false
    @show_replay_buttons = true 
  end
  
  def winner!(msg)
    @winner = "<strong>#{session[:player_name]} wins $#{session[:bet_amount]}!</strong> #{msg}"
    session[:cash_on_hand] += session[:bet_amount]
    @show_hit_or_stay_buttons = false
    @show_replay_buttons = true 
  end
  
  def tie!
    @winner = "#{session[:player_name]} and Dealer are tied at #{calculate_total(session[:player_cards])}!"
    @show_replay_buttons = true   
  end
end

before do 
  @show_hit_or_stay_buttons = true 
end

get '/' do
  if session[:player_name]
    redirect '/game'
  else 
    redirect '/new_player'
  end
end

get '/new_player' do 
  erb :new_player
end

post '/new_player' do
  session[:cash_on_hand] = 500
  session[:player_name] = params[:user_name]
  if params[:user_name].empty?
    @error = "Please enter your name!"
    halt erb(:new_player)
  end
  redirect '/bet'
end

get '/game' do
  session[:turn] = session[:player_name]
  
  SUITS = ['H','S','D','C']
  VALUES = ['2','3','4','5','6','7','8','9','10','A','K','Q','J']
  session[:deck] = SUITS.product(VALUES).shuffle! 
  
  session[:dealer_cards] = []
  session[:player_cards] = []
  session[:dealer_cards] << session[:deck].pop
  session[:player_cards] << session[:deck].pop
  session[:dealer_cards] << session[:deck].pop
  session[:player_cards] << session[:deck].pop
  
  player_total = calculate_total(session[:player_cards])
  dealer_total = calculate_total(session[:dealer_cards])
  
  if player_total == BLACKJACK_AMOUNT
    winner!("#{session[:player_name]} hit blackjack!")
  end
  
  if dealer_total == BLACKJACK_AMOUNT
    loser!("Dealer hit Blackjack. #{session[:player_name]} has #{calculate_total(session[:player_cards])}")
  end
  
  erb :game
end

post '/game/player/hit' do
  session[:player_cards] << session[:deck].pop
  player_total = calculate_total(session[:player_cards])
  
  if  player_total == BLACKJACK_AMOUNT
    winner!("#{session[:player_name]} hit blackjack!")
  elsif player_total > BLACKJACK_AMOUNT
    loser!("#{session[:player_name]} has busted! #{session[:player_name]} has #{calculate_total(session[:player_cards])}")
  end
  erb :game, layout: false 
end

post '/game/player/stay' do
  @success = "#{session[:player_name]} has chosen to stay at #{calculate_total(session[:player_cards])}."
  @show_hit_or_stay_buttons = false 
  redirect '/game/dealer'
end

get '/game/dealer' do
  session[:turn] = "Dealer"
  
  @show_hit_or_stay_buttons = false 
  
  dealer_total = calculate_total(session[:dealer_cards])

  if dealer_total == BLACKJACK_AMOUNT
    loser!("Dealer hit Blackjack. #{session[:player_name]} has #{calculate_total(session[:player_cards])}")
  elsif dealer_total > BLACKJACK_AMOUNT
    winner!("Dealer has busted!")
  elsif dealer_total >= DEALER_HIT_MIN
    #dealer stays 
    redirect '/game/compare'  
  else 
    #dealer hits 
    @show_dealer_hit_button = true 
  end
  erb :game, layout: false 
end

post '/game/dealer/hit' do
  session[:dealer_cards] << session[:deck].pop
  redirect '/game/dealer'
end

get '/game/compare' do
  player_total = calculate_total(session[:player_cards])
  dealer_total = calculate_total(session[:dealer_cards])
  if player_total > dealer_total
    winner!("#{session[:player_name]} has #{player_total} and Dealer has #{dealer_total}.")
  elsif player_total < dealer_total
    loser!("#{session[:player_name]} has #{player_total} and Dealer has #{dealer_total}.")
  else 
    tie!
  end
  erb :game, layout: false 
end

get '/game_over' do 
  erb :game_over
end

get '/bet' do 
  if session[:cash_on_hand] > 0 
    erb :bet
  else
    @error = "You ran out of money... let's start over... ok?"
    erb :game_over
  end
end

post '/bet' do
  session[:bet_amount] = params[:bet_amount].to_i
  if session[:bet_amount] <= 0
    @error = "Stop being cheap! Your bet can't be less than 0!"
    halt erb(:bet)
  elsif session[:bet_amount] > session[:cash_on_hand]
    @error = "You don't have enough money to make this bet!"
    halt erb(:bet)
  end
  redirect '/game' 
end