// Grids, Loops and animations
// 23. Making a grid with a translate
let size = 50;
let x, y;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  for(x=size/2; x<400; x=x+size) {
    for(y=size/2; y<400; y=y+size) {
      push();
      translate(x, y);
      rect(0,0, size, size);
      pop();
    }
  }
  
}