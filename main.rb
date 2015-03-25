require 'rubygems'
require 'sinatra'

#fix for google chrome 
use Rack::Session::Cookie, :key => 'rack.session',
                           :path => '/',
                           :secret => 'niven' 

get '/' do 
  "Hello this is the main page..."
end

get '/new_player' do
  erb :new_player
end

post '/new_player' do
  session[:player_name] = params[:user_name]
  redirect '/wager'
end

get '/wager' do 
  erb :wager
end

post '/wager' do 
  "Post wager data and redirect"
end 

get '/nested_template' do
  erb :'/users/profile'
end

get '/gone' do 
  redirect '/'
end

