

var x = [];
var y = [];
var i = 0;
var easing = .001;


function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i <250; i++){
  x.push(random(width));
  y.push(random(height));
}
}

function draw() {
    background(0);
   for (var i = 0; i <250; i++){
  ellipse (x[i], y[i], random(2,5),random(2,5));
var eX = (mouseX - x[i]) * easing;
var eY = (mouseY - y[i]) * easing;

	x[i] = x[i] + eX;
	y[i] = y[i] + eY;
  }
  
}
