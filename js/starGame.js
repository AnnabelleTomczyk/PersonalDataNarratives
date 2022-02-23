let starX;
let starY;
let starSpeedX;
let starSpeedY;
let starsCaught = 0
let net;

let mouseCollide;

function preload(){
star= loadImage("images/star.png");
net= loadImage ("images/net.png");
}



function setup(){

createCanvas(windowWidth, windowHeight)
starX = random(10, windowWidth-10)
//so star doesn't go off of the screen
starY = random(10,windowHeight-10);
starSpeedX = 1;
starSpeedY = 1;
textAlign(CENTER)


}

function draw(){

if(keyIsPressed == true){
  background(121, 37, 247);
}else{
  background (131, 106, 222)
}

fill(255);
textSize(40);
text("Stars Caught:"+ starsCaught + "00",windowWidth/2,100)

image(net, mouseX,mouseY,70,90)



mouseCollide= dist(starX, starY, starX, starY)
//changing speed of the star
starX = starX + starX;
starY = starY + starSpeedY;

//reverse course of the star
if(starX >= windowWidth-10 || starX<= 10){
  starSpeedX = starSpeedX * -.5

}

if(starY >= windowHeight-10 || starY <= 10){
  starspeedY = starSpeedY * -.5

}

if (mouseCollide < 10){
  starsCaught ++;
  starX = random(10,windowWidth-10)
  starY = random(10,windowHeight-10)
  starSpeedX=starSpeedX * .5;
  starSpeedY=starSpeedY * .5;


}

image(star,starX, starY,60, 60);
print(starY);

}


function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}
