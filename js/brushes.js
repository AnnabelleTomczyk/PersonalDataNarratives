let furby;
let furbyBrushBool=false;
let ellipseBrushBool=false;
let squareBrushBool=false;

function preload(){
furby= loadImage('images/furby.png');

}


function setup(){
createCanvas(windowWidth, windowHeight)

background(255)
imageMode(CENTER)

}


function draw(){

if(ellipseBrushBool==true){
  ellipseBrush();

}
if(furbyBrushBool==true){
  furbyBrush();
  }

if(squareBrushBool==true){
  squareBrush();
}


}


//Custom Furby Brush
function furbyBrush(){
  if(mouseIsPressed === true){
    image(furby,mouseX,mouseY,40,40)
  }


}
//custom ellipse brush
function ellipseBrush(){
  if(mouseIsPressed === true){
    fill (random(255), random(255), random(255),50)
    ellipse(mouseX,mouseY,50,50);

  }
}

function squareBrush(){
  if(mouseIsPressed === true){
    fill (random(255), random(255), random(255),50)
    square(mouseX,mouseY,50);

}

}

function keyPressed(){
  if(key == 'e'){
    ellipseBrushBool=true;
    furbyBrushBool=false;
    squareBrushBool=false;
  }
  if(key == 'f'){
    furbyBrushBool=true;
    ellipseBrushBool=false;
    squareBrushBool=false;
  }
  if(key== 's'){
    squareBrushBool=true;
    ellipseBrushBool=false;
    furbyBrushBool=false;

  }
  if(key=='c'){
    background(255);
    furbyBrushBool=false;
    ellipseBrushBool=false;
    squareBrushBool=false;
  }
}
