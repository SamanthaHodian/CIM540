var canvas;
var x;
var y;
var xSpeed;
var ySpeed;
var ball;

function setup() {
	canvas = createCanvas(500, 500); 
	canvas.parent('right_panel');
	x = width/2;
	y = 480;
	ySpeed = 0;
	xSpeed = 0;
}

function draw() {
	background(0);
	noStroke();
	fill(0,255,255);
	rect(0,60,350,20);
	rect(150,140,350,20);
	rect(0,220,350,20);
	rect(150,300,350,20);
	rect(0,380,350,20);
	fill(random(255),random(255),random(255));
	ellipse(x,y,30,30);
	y = y + ySpeed;
	x = x + xSpeed;
}



function up() {
	ySpeed = -2;
	xSpeed = 0;
}

function down() {
	ySpeed = 2;
	xSpeed = 0;
}

function left() {
  ySpeed = 0;
	xSpeed = -2;
}

function right() {
  ySpeed = 0;
	xSpeed = 2;
}

function stop() {
  ySpeed = 0;
	xSpeed = 0;
}