// Grids, Loops and animations
// 22. Rotation Painting App

let i;
let segment;

function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
  segment =16;
}

function draw() {
  
  push();
  translate(width/2, height/2);
  for(i=0; i<segment; i=i+1) {
    rotate(360/segment);
    line(0,0,400,0);
  }
  pop();
  
}