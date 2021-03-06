var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finish;

var form, player, game;

var racers,racer1 ,racer2 ,racer3 ,racer4;

var ground1;

var  racer1_img, racer2_img, racer3_img, racer4_img;

var finishingImg;

var hurdle1,hurdle2,hurdle3,hurdle4,hurdle5;


function preload(){
  racer1_img = loadImage("../images/racer1.png");
  racer2_img = loadImage("../images/racer2.png");
  racer3_img = loadImage("../images/racer3.png");
  racer4_img = loadImage("../images/racer4.png");
  ground = loadImage("../images/base.png");
  finishingImg = loadImage("../images/finishingLine.png");
  hurdle1Img = loadImage("../images/hurdle.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  finish = createSprite(5396,displayHeight/2,10,displayHeight);
  finish.addImage("finishing1",finishingImg);

  hurdle1 = createSprite(2600,200,100,100);
  hurdle1.addImage("obstacle1",hurdle1Img);

  ground1 = createSprite(2500,100,10000,10);
  ground1.addImage("round1",ground);
}


function draw(){
  if(playerCount === 4){
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
