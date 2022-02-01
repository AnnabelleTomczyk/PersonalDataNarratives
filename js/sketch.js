// Stuff in setup runs once in sketch
//Only make 1 setup function
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(145, 239, 255)
  rectMode(CENTER)
  print(windowWidth)
  // put setup code here
}

//Stuff in draw runs over and over
//Only make 1 Draw function
function draw() {



  stroke(30,200,100)
  strokeWeight(5)
  fill(255, 181, 54)
  ellipse(200,350,200,200)


  fill(156, 255, 157)
  rect(200,250,50,50);

  stroke(176, 23, 36)
  fill(250, 45, 62)
  square(500,400,100);

  fill(156, 255, 157)
  rect(500,345,30,30);

  stroke(219, 216, 31)
  fill(255, 251, 41)
  ellipse(350,400,100,75)

  // put drawing code here
}
