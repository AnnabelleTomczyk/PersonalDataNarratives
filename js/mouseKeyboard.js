//Global Variables
let ellipseX;
let ellipseY;
let mouthHeight = 100;
let furby;

function preload(){
furby =  loadImage ('images/furby.png');

}
function setup(){
  createCanvas (windowWidth, windowHeight)
  print(ellipseX)

ellipseX= random(50,windowWidth-50);
ellipseY= random (50,windowHeight-50);
rectMode(CENTER);
}

function draw(){

  if(mouseIsPressed == true){
    background(40,100,100);
  }else{
    background (180,55,200)
  }

image(furby, mouseX,mouseY)

if (keyIsPressed==true){
  strokeWeight(10);
//Randowm requires at least one argument will return
// a random vaue between the ranges

  stroke(random(255),random(255))
// Setting the mouth height to 0
  mouthHeight = 0;

}else{
  strokeWeight(5);
  stroke(200,100,50);
  mouthHeight = 100;



}

  if(mouseX > windowWidth/2){
    fill(30,200,150);

  }else{
    fill (200,40,100);
  }
ellipse(350,200,100)
ellipse(970,200,100)
ellipse (ellipseX, ellipseY,100);

rect(windowWidth/2,windowHeight/2, 300, mouthHeight)

}
