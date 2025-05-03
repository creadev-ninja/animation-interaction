// Grids, Loops and animations
// 23. Making a grid with a translate

let size = 50;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  // rect(25,25,50,50);
  push();
  translate(size/2, size/2);
  rect(0,0, size, size);
  pop();
  
  push();
  translate(size/2+size, size/2);
  rect(0,0, size, size);
  pop();
  
  push();
  translate(size/2+2*size, size/2);
  rect(0,0, size, size);
  pop();
  
}