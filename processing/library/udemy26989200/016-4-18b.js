// Grids, Loops and animations
// Loop 2
let x;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for(x=25; x<400; x=x+50){
    ellipse(x,25,50,50);
  }
}