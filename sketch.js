var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var leaderBoard =0;
var form, player, game;
var passedFinish;
var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronze_img = loadImage("images/bronze medal.png");
  silver_img = loadImage("images/silver medal.png");
  gold_img = loadImage("images/gold medal.png");
  backgroundImg=loadImage("images/game-1.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImg);
  if(playerCount === 4 && leaderBoard === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(leaderBoard === 4){
    game.update(2);
  }
  if(gameState === 2 && leaderBoard ===4){
    game.displayRanks();
  }
}