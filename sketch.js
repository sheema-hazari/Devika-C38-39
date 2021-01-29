var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var plrs, plr1, plr2;

var track, plr1_img, plr2_img;

function preload(){
  track = loadImage("../images/track.jpg");
  plr1_img = loadAnimation("../images/ammu1.png","../images/ammu2.png");
  //plr2_img = loadImage("../images/ammu2.png");
  plr2_img = loadImage("../images/alien.png");
  
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
