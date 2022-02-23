// Variables, one for each image
let star;

let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = -1;

// Load two images
function preload() {
  star = loadImage('images/star.png');
}

function setup() {
  // Create a canvas
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 0, 200);
  image(star,75,75, 75, 75);

  // Move x and y
  x = x + xspeed;
  y = y + yspeed;

  // If image hits right or left edge
  if (x < 0 || x > width - 75) {
    // Turn around!
    xspeed = -xspeed;
  }

  if (y < 0 || y > height - 75) {
    // Turn around!
    yspeed = -yspeed;
  }
}
