// Grids, Loops and animations
// Loop 1
let i;
let x;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x=25;
  for(i=0; i<8; i=i+1){
    ellipse(x,25,50,50);
    x=x+50;
  }
}