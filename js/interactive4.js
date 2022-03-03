
let xArray = [];

let yArray = [];
let stepX= 60;
let stepY = 60;

let star;

let net;

let bg;





function preload(){
star= loadImage("images/star.png");
net= loadImage ("images/net.png");
bg= loadImage("images/galaxy2.jpg")


}
function setup(){
	createCanvas(windowWidth, windowHeight);
  background(bg)
  textAlign(CENTER)


	//add 10 x,y postions to arrays
	for(let x =0; x<windowWidth; x+=stepX){
		for(let y = 0; y<windowHeight; y+=stepY){
		xArray.push(x);
		yArray.push(y);
	}
}
}


function draw(){
  if(mouseIsPressed == true){
    background(bg);
    stroke(255)

  }else{
    background (180,55,200)
  }
	//go through the arrays, draw ellipses
	 for(var i = 0; i < xArray.length; i++){
	 	image(star,xArray[i], yArray[i], 60, 60);
		//if the mouse collides with an object, delete that
		//specific object
	 	if(dist(mouseX, mouseY, xArray[i], yArray[i]) < 30){
	 		xArray.splice(i, 1);
	 		yArray.splice(i, 1);

	 	}
	 }
   fill(255+sin(frameCount*.3) * 128);
   textSize(75);
   text("YOU ARE A STAR",windowWidth/2,100)
   strokeWeight(2);
   image(net,mouseX,mouseY,70,90)




}
