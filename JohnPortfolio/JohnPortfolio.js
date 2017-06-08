//Program requires the CORS add-on in chrome to function properly.
//Displays a match ID only.
//Prints JSON files from steam to the console.

var heroes = [];
var items = [];
var players = [];
var game;
var APIKey = "C03079E1CC51C55D54EFED2BD96B3C05";
var heroData;
var itemData;
var matchData;

//json file URLs:
//GetItemsUrl + apiKey: https://api.steampowered.com/IEconDOTA2_570/GetGameItems/V001/?key=" + APIKey + "&language=LANGCODE
//GetHeroesUrl + apiKey: https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=" + APIKey
//Sample Match Data: https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3198457027&key=" + APIKey

function preload(){
  heroData = loadJSON("http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=" + APIKey, addHeroes);
  itemData = loadJSON("https://api.steampowered.com/IEconDOTA2_570/GetGameItems/V001/?key=" + APIKey + "&language=LANGCODE", addItems);
  matchData = loadJSON("https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3198457027&key=" + APIKey, addMatch);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log(heroData);
  console.log(itemData);
  console.log(matchData);
  noLoop();
}

function draw() {
  background(0);
  fill(255);
  text("Match ID: " + game.matchId, 5, 15);
}

function addHeroes(data){
  for(i=0; i<data.result.heroes.length; i++){
    heroes.push(new Hero(data.result.heroes[i].name, data.result.heroes[i].id));
    console.log(heroes[i].name, heroes[i].id);
  } 
}

function addItems(data){
  for(i=0; i<data.result.items.length; i++){
    items.push(new Item(data.result.items[i].name, data.result.items[i].id, data.result.items[i].cost, data.result.items[i].secret_shop, data.result.items[i].side_shop, data.result.items[i].recipe, data.result.items[i].localized_name));
    console.log(items[i].name, items[i].id);
  }
}

function addMatch(data){
  game = new Match(data.result.radiant_win, data.result.duration, data.result.pre_game_duration, data.result.start_time, data.result.match_id, data.result.match_seq_num, data.result.tower_status_radiant, data.result.tower_status_dire, data.result.barracks_status_radiant, data.result.barracks_status_dire, data.result.cluster, data.result.first_blood_time, data.result.lobby_type, data.result.human_players, data.result.leagueid, data.result.positive_votes, data.result.negative_votes, data.result.game_mode, data.result.flags, data.result.engine, data.result.radiant_score, data.result.dire_score);
  for(i=0; i<data.result.players.length; i++)
    addPlayer(new Player(data.result.players[i].account_id, data.result.players[i].player_slot, data.result.players[i].hero_id, data.result.players[i].item_0, data.result.players[i].item_1, data.result.players[i].item_2, data.result.players[i].item_3, data.result.players[i].item_4, data.result.players[i].item_5, data.result.players[i].backpack_0, data.result.players[i].backpack_1, data.result.players[i].backpack_2, data.result.players[i].kills, data.result.players[i].deaths, data.result.players[i].assists, data.result.players[i].leaver_status, data.result.players[i].last_hits, data.result.players[i].denies, data.result.players[i].gold_per_minute, data.result.players[i].xp_per_minute, data.result.players[i].level, data.result.players[i].hero_damage, data.result.players[i].tower_damage, data.result.players[i].hero_healing, data.result.players[i].gold, data.result.players[i].gold_spent, data.result.players[i].scaled_hero_damage, data.result.players[i].scaled_tower_damage, data.result.players[i].scaled_hero_healing));
}

function addPlayer(ai, ps, hi, i0, i1, i2, i3, i4, i5, b0, b1, b2, k, d, a, ls, lh, deny, gpm, xpm, l, hd, td, hh, g, gs, shd, std, shh){
  players.push(new Player(ai, ps, hi, i0, i1, i2, i3, i4, i5, b0, b1, b2, k, d, a, ls, lh, deny, gpm, xpm, l, hd, td, hh, g, gs, shd, std, shh));
}

//http://sharonkuo.me/dota2 <- original tutorial