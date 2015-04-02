{"filter":false,"title":"application.js","tooltip":"/public/application.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":2},"end":{"row":2,"column":4},"action":"remove","lines":["pl"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":16},"action":"insert","lines":["player_stays()"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["function player_stays(){","$(document).on(\"click\", \"form#stay_form input\", function(){","    alert('Player stays');","    $.ajax({","      type: \"POST\",","      url: \"/game/player/stay\"","    }).done(function(msg){","      $(\"#game\").replaceWith(msg);","    }); ","    ","    return false;","  });","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"remove","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":38},"end":{"row":34,"column":39},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":37},"end":{"row":34,"column":38},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"remove","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":32},"action":"remove","lines":["de"]},{"start":{"row":34,"column":30},"end":{"row":34,"column":40},"action":"insert","lines":["dealer_hit"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":35,"column":23},"action":"remove","lines":["layer stays"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"remove","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":3,"column":5},"action":"remove","lines":["dea"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":14},"action":"insert","lines":["dealer_hit()"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":480,"scrollleft":0,"selection":{"start":{"row":5,"column":0},"end":{"row":5,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1428002127184,"hash":"19e7ebab7f784cbe7d33fd7c42ec6590f111196a"}