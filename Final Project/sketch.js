var coralspeed = 0;
var coralX = [];
var score = 0;
var gameState;
var WAITING = 0;
var PLAYING_GAME = 1;
var GAME_OVER = 2;
var player;
var coin;
var enemies;

function preload(){
  coral = [];
  for (var i = 0; i < 2; i++) {
    coral[i] = loadImage("coral.png");
  }
  fish = loadImage("fish.png");
  baby = loadImage("coin.png");
  start = loadImage ("start.png");
  bubble = loadImage ("bubble.png");
  shark = loadImage ("shark.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < coral.length; i++) {
    coralX[i] = coral[i].width * i;
    
  }
  gameState = WAITING;
}

function draw() {
    if(gameState == WAITING) {
    background(153,204,255);
    fill(0);
    image(start, (width/2-(start.width/2)), (height/2-(start.height/2)));  
    }
    
   else if(gameState == PLAYING_GAME) {
  background (153,204,255);
  
  //CORAL
  for (var i = 0; i < coral.length; i++) {
    image(coral[i],coralX[i],height-coral[i].height);
    coralX[i]--;
    if (coralX[i] < -coral[i].width) {
      coralX[i] = coral[i].width * (coral.length - 1)  - 1;
    }
    console.log(i + " : " + coralX[i]);
  }
  
  //PLAYER
  drawSprites();
  player.overlap(coin, coinCollect);
  enemies.overlap(player, dead);
  if (coin.position.x <0){
    generateCoin();
  }
  if (player.position.x < 0){
    player.setSpeed.x = width;
  }
   if (player.position.x > width){
    player.position.x = 0;
  }
   if (player.position.y < 0){
    player.position.y = height;
  }
   if (player.position.y > height){
    player.position.y = 0;
  }
  textSize(30);
   text(score, 30,40);
}

  else if (gameState == GAME_OVER) {
    gameState = WAITING;
  }
}

function mousePressed () {
      if(gameState == WAITING) {
    startGame();
  }
    else if (gameState == GAME_OVER) {
    gameState = WAITING;
  }
}

function keyPressed () {

 if (gameState == PLAYING_GAME) {
    if(keyCode == UP_ARROW) {
      player.setSpeed(6, 270);
      generateBubbles();
    }
    if (keyCode == DOWN_ARROW) {
      player.setSpeed(6, 90);
      generateBubbles();
    }
    if (keyCode == LEFT_ARROW) {
      player.setSpeed(6, 180);
    }
    if (keyCode == RIGHT_ARROW) {
      player.setSpeed(6, 0);
    }
     if (keyCode == 32) {
      player.setSpeed(0, 0);
    }
}
}


function startGame() {
    gameState = PLAYING_GAME;
    score = 0;
    player = createSprite(width/2, height/2, fish.width, fish.height);
    player.addImage(fish);
    generateCoin();
    generateEnemy();
    
}

 function coinCollect(collector, collected) {
    collected.remove();
    score+= collected.points;
    generateCoin();
    generateEnemy();
 }
function generateBubbles() {
 bubbles = createSprite(random(width), height+10, random(10,30), random(10,30));
     bubbles.addImage(bubble);
      bubbles.setSpeed(random(0.3,1.5), 270);
      bubbles.life=400;
    
}
function generateCoin() {
 coin = createSprite(width+10, random(height), baby.width, baby.height);
      coin.points = 1;
      coin.addImage(baby);
      coin.setSpeed(random(4,8), 180);
      coin.life=300;
}
function generateEnemy() {
 enemies = createSprite(width+10, random(height), shark.width, shark.height);
      enemies.addImage(shark);
      enemies.setSpeed(random(6,10), 180);
      enemies.life=200;
}
function dead(collector, collected) {
  allSprites.clear();
  gameState = GAME_OVER;
}