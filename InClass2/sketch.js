function setup() {
  createCanvas(500,500);
  background(12,12,230);
}

function draw() {
  background(12,12,230);
  
    if(mouseY<=200){
    noStroke();
    fill(255);
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
    }
    else{
    noStroke();
    fill(180);
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
 }
 
  if(mouseY>=300){
     stroke(180);
     line (50, 50, 50, 100)
     line (80, 50, 80, 100)
     line (65, 65, 65, 115)
     line (95, 65, 95, 115)
     
     line (450, 50, 450, 100)
     line (420, 50, 420, 100)
     line (435, 65, 435, 115)
     line (405, 65, 405, 115)
     
     line (220, 50, 220, 100)
     line (250, 50, 250, 100)
     line (235, 65, 235, 115)
     line (265, 65, 265, 115)
  }
  

    if(mouseY>=500){
    noStroke()
    fill (255,50,80) ;
    ellipse(250,mouseY,600,600);
    fill (255,100,0) ;
    ellipse(250,mouseY,500,500);
    fill (255,175,0) ;
    ellipse(250,mouseY,410,410);
    fill (255,255,0) ;
    ellipse(250,mouseY,320,320);
    }
    
    else {
    noStroke()
    fill (255,50,80) ;
    ellipse(250,500,600,600);
    fill (255,100,0) ;
    ellipse(250,500,500,500);
    fill (255,175,0) ;
    ellipse(250,500,410,410);
    fill (255,255,0) ;
    ellipse(250,500,320,320);
    }
    
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