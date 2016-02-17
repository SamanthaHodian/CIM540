var words = [];

function setup() {
 createCanvas (windowWidth,windowHeight);
  background(0);
 textSize(70);
	textAlign(CENTER);
	stroke(255);
	strokeWeight(2);
 words = ["GOING","TO","JAMAICA"];
}

function draw() {
 
  
  if (mouseX < windowWidth/3 ){
   fill (150,0,0);
   text(words[0], mouseX, mouseY);
  }
  
   if (mouseX > (windowWidth - windowWidth/3 )){
    fill (0,150,0);
   text(words[2], mouseX, mouseY);
  }
  
 if(mouseX> windowWidth/3 && mouseX < (windowWidth - windowWidth/3 ) ) {
    fill (255,230,60);
      text(words[1], mouseX, mouseY);
  }
  
  line(windowWidth/3, 0, windowWidth/3, windowHeight);
  line((windowWidth - windowWidth/3), 0, (windowWidth - windowWidth/3), windowHeight);
}