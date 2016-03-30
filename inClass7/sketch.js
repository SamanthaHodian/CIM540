

var Particle = function(x,y){
 this.x=x;
 this.y=y;
 this.diameter = random(1,8);
 this.yspeed = random (-4,4);
  this.xspeed = random (-2,2);
 this.show = function() {
   ellipse(this.x,this.y, this.diameter, this.diameter);
 }
 this.move = function() {
   this.y = this.y + this.yspeed;
   this.x= this.x + this.xspeed;
  }
}
var p = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background (0);
  noStroke();
  fill (random(0,255), random(0,255), random(255));
  text("click, drag or type", width/2, height/2);
  ellipse(mouseX, mouseY, 10, 10);
  for (var i = 0; i < p.length; i++){
    p[i].show();
    p[i].move();
  }

}

function mouseDragged(){
  p.push(new Particle (random(0,windowWidth), random(0,windowHeight)));
}

function mousePressed(){
  p.push(new Particle (mouseX, mouseY));
}

function keyPressed () {
  p.push(new Particle (mouseX, mouseY));
}
