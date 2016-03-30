var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&APPID=f521c55d15f52957f7a214a907fd2bd1";
var units = "&units=imperial";
var temp;
var temp_min;
var temp_max;
var cloudiness;
function setup() {
  canvas = createCanvas(500,500);
  var url = base_url + city_url + app_id + units;
  loadJSON(url, seeWeather);

  
}

function draw() {
 background(12,12,230); 
    noStroke();

 fill(255, cloudiness);
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
  
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  if (temp) {
   text("MIAMI", width/2, 110)
   text("click for temperature",width/2,130);
   
  }
}
function mousePressed() {
  text(temp,width/2,155);
}

function seeWeather(weather) {

  temp = weather.list[0].main.temp;
  temp_min = weather.list[0].main.temp_min;
  temp_max = weather.list[0].main.temp_max;
  console.log(weather);
  cloudiness = weather.list[0].clouds.all;

}