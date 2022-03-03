
let t = 0; // time variable
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
function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  fill(255, 102, 255);
  starX = random(10, windowWidth-10)
  starY = random(10,windowHeight-10);
  starSpeedX = 1;
  starSpeedY = 1;
  textAlign(CENTER)
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 2; x <= width; x = x + 40) {
    for (let y = 2; y <= height; y = y + 40) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}
