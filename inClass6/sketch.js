
var x = [];
var y = [];

function setup() {
createCanvas (windowWidth, windowHeight);
}

function draw() {
  background (0);
  for (var i = 0; i < x.length; i = i + 1) {
 if (dist(x[i],y[i],mouseX,mouseY)> 15){
   fill(255);
 }
else {
    fill(random(255), random(255), random(255));
} 
     ellipse(x[i], y[i], 30, 30);
     y[i] = y[i] + 1
   }
  
}

function mousePressed(){
  x.push(mouseX);
  y.push(mouseY);
}