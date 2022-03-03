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

image(net,mouseX,mouseY,70,90)



mouseCollide= dist(mouseX, mouseY, starX, starY)
//changing speed of the star
starX = starX + starX;
starY = starY + starSpeedY;

//reverse course of the star
if(starX >= windowWidth-.5 || starX<= -.5){
  starSpeedX = starSpeedX * -1
 print("change x speed")
}

if(starY >= windowHeight-.5 || starY <= -.5){
  starspeedY = starSpeedY * -1
    print ("change y speed")
}

if (mouseCollide < .5){
  starsCaught ++;
  starX = random(.5,windowWidth-.5)
  starY = random(.5,windowHeight-.5)
  starSpeedX=starSpeedX * 1.5;
  starSpeedY=starSpeedY * 1.5;


}

image(star,starX, starY,60, 60);
print(starY);

}


function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}
