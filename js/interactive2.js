

let x = []
let y = [];
let xspeed = 2.5;
let yspeed = -1;

let starBool=false;

let xArray = [];

let yArray = [];
let stepX= 60;
let stepY = 60;

let ellipseX= 300
let ellipsY= 200

let blop;

let star;

let pinkStar;




function preload(){
star= loadImage("images/star.png");
blop= loadSound("audio/Blop.mp3")
pinkStar= loadImage ("images/pinkStar3.png")

}

function setup() {

  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);



}

//add 10 x,y postions to arrays
	for(let x =0; x<windowWidth; x+=stepX){
		for(let y = 0; y<windowHeight; y+=stepY){
		xArray.push(x);
		yArray.push(y);
	}
}

function draw() {
background(0);
for(let i=0; i < x.length;i++){
  image(star, x[i],y[i],60,60)


}

background(0);
	//go through the arrays, draw star
	 for(var i = 0; i < xArray.length; i++){
	 	image(star, xArray[i], yArray[i], 60, 60);
		//if the mouse collides with an object, delete that
		//specific object
	 	if(dist(mouseX, mouseY, xArray[i], yArray[i]) < 30){
	 		xArray.splice(i, 1);
	 		yArray.splice(i, 1);
	 	}
	 }

image (star,windowWidth/2,windowHeight/2,160,160)
image(star, windowWidth/4,windowHeight/2,160,160)
image(star, windowWidth/6,windowHeight/2,160,160)
image(star, windowWidth/80,windowHeight/2,160,160)

  }



  print(dist(mouseX,mouseY,windowWidth/8,windowHeight/8));
  if (mouseX < 50 && mouseY < 50) {
    cursor("images/star.png");
    }
  textSize(200);
  textAlign(CENTER);
  text(255)

  if (dist(mouseX,mouseY,windowWidth/8,windowHeight/8) < 50){
    text("unhealthy",700,400);

  }
  if (dist(mouseX,mouseY, windowWidth/8,windowHeight/2.99)<50){
    text("healthy",700,400);
  }
  if (dist(mouseX,mouseY,windowWidth/3.25,windowHeight/8)<50){
    text("healthy",700,400);
  }
  if (dist(mouseX,mouseY, windowWidth/8,windowHeight/1.9)<50){
    text("unhealthy",700,400);
  }



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}





function mouseClicked(){

  x.push(mouseX);
  y.push(mouseY);
  blop.play();
  print(x.length + ","+ y.length)

}

function keyPressed(){
  if(key==='x'){
    for(let i=0; i < x.length;i++){
      x.splice(i,x.length)
      y.splice(i,y.length)
      print(x.length)


    }


}


  }

function starPressed(){



}
