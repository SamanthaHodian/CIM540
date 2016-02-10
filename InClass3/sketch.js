var xPosition;
var yPosition;

function setup() {
  createCanvas(500,500);
  xPosition = width/2
  yPosition = height
}

function draw() {
 background(255,255,255)
  if(tooHigh(xPosition,yPosition)== true) {
  xPosition=random(width);
  yPosition=random(height);
  }
  
  balloon(xPosition, yPosition);
  yPosition--;
}


  
function tooHigh(x, y) {

  if (y < 0) {
    return true;
  }
  
  return false;
  
}

function balloon (x,y) {
  noStroke();
  fill(0,200,0);
  ellipse(x,y,60,60);
  fill(0,0,255);
  rect(x-10,y+30, 20, 10);
  strokeWeight(2);
  stroke(0,200,0);
  line(x-10,y+30, x-10, y+60);
  line(x+10,y+30, x+10, y+60);
  noStroke();
  fill(255,0,0);
  rect(x-12,y+60, 24, 20);
}