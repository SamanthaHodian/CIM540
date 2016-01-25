function setup() {
  createCanvas(500,500);
  background(12,12,230);
}

function draw() {

    noStroke();

    fill(255,30);
    ellipse(50, 50, 30,30);
    ellipse(80, 50, 30,30);
    ellipse(65, 65, 30,30);
    ellipse(95, 65, 30,30);

    ellipse(450, 50, 30,30);
    ellipse(420, 50, 30,30);
    ellipse(435, 65, 30,30);
    ellipse(405, 65, 30,30);

    ellipse(220, 50, 30,30);
    ellipse(250, 50, 30,30);
    ellipse(235, 65, 30,30);
    ellipse(265, 65, 30,30);
    
    fill (255,50,80) ;
    ellipse(250,500,600,600);
    fill (255,100,0) ;
    ellipse(250,500,500,500);
    fill (255,175,0) ;
    ellipse(250,500,410,410);
    fill (255,255,0) ;
    ellipse(250,500,320,320);

    
    fill(25);
    rect(0,430,500,70);
   
    fill(60);
    rect(30,200,70,300);
    rect(130,275,100,225);
    rect(260, 180, 75, 320);
    rect(365, 330, 120, 170);
    
    fill(110);
    rect(60, 350, 100, 150);
    rect(180, 415, 120, 85);
    rect(320,385, 80, 115);
    
    var star = (random(500), random(500), 3,3);
    fill(255,255,0)
    ellipse(star)
    
  
  
}