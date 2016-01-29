var r;
var g;
var b;

function setup() {
  createCanvas(500,500);
  r = 0;
  g = 127;
  b = 200;
}

function draw() {
  r++;
  g++;
  b++;

}

function mouseDragged() {
  var mouseStrength = dist(mouseX, mouseY, pmouseX, pmouseY);
  var strokeStrength = map(mouseStrength, 0, 100, 0, 20);
  stroke(r%255,g%255,b%255);
  strokeWeight(strokeStrength);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  background(255);
}
