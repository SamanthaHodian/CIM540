var splats = [];
var marks = [];
var drop = false;
function setup() {
  createCanvas(windowWidth, windowHeight);  
}

function draw() {
  background(0);
  fill(255);
  for (var i = 0; i < marks.length; i++) {
    marks[i].display();
    if (drop) {
      marks[i].drop();
    }
  }

  if (marks.length > 1000) {
    marks.splice(0,1);
  }
  
  if (drop) {
    for (var i = marks.length - 1; i > 0; i--) {
      if (marks[i].y > height) {
        marks.splice(i,1);
      }
    }
  }
  

}

function mouseDragged() {
  marks.push(new Mark(mouseX, mouseY, pmouseX, pmouseY));
}

function keyPressed() {
  drop = !drop;  
}

// Mark class
var Mark = function(x, y, px, py) {
  this.x = x;
  this.y = y;
  this.px = px;
  this.py = py;
  var pressure = dist(pmouseX, pmouseY, mouseX, mouseY);
  if (pressure > 5) {
    pressure = 5;
  }
  this.diameter = pressure;
  this.splatter = [];
  this.color = color(255,255,255,200);
  splats = random(1,5);
  for (var i = 0; i < splats.length; i++) {
      var splat = new Splatter(random(x - 15, x + 15), random(y - 15, y + 15));
      splat.setColor(this.color);
      this.splatter.push(splat);
    }

  this.display = function() {
    stroke(this.color);
    strokeWeight(this.diameter);
    line(this.x, this.y, px, py);
    for (var i = 0; i < this.splatter.length; i++) {
      this.splatter[i].display();
      this.splatter[i].drop();
    }
    for (var i = this.splatter.length - 1; i > 0; i--) {
      if (this.splatter[i].faded()) {
        this.splatter[i].splice(i, 1);
      }
    }
    
  }; 
  
  this.drop = function() {
    this.y+=1;
    this.py+=1;

    for (var i = 0; i < this.splatter.length; i++) {
      this.splatter[i].y+=1;
    }
  };
  
  this.setColor = function(c) {
    this.color = c;
  };
};
//BEGIN SPLAT OBJECT

var splatter = function(x, y) {
  this.x = random(x - 5, x + 5);
  this.y = random(y - 5, y + 5);
  this.a = random(250);
  this.diameter = random(1, 5);
  this.speedX = random(1,-1);
  this.speedY = random(1);
  this.color = color(255,255,255);
  
  this.drip = function() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.speedX *= 0.98;
    this.speedY *= 0.98;
    this.a -= 0.1;
    if (this.a <= 0) {
      this.a = 0;
    }
    this.color = color(red(this.color), green(this.color), blue(this.color), this.a);
  }

  this.setColor = function(c) {
    this.color = c;
  }
  
  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  this.offscreen = function() {
    if (this.y > height) {
      return true;
    }
    else {
      return false;
    }
  }
  
  this.faded = function() {
    if (this.a <= 0) {
      return true;
    }
      return false;
  }

}

