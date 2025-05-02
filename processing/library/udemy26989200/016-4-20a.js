// Grids, Loops and animations
// push pop
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  push();
  translate(200,200);
  rotate(45);
  rect(0,0,50,50);
  pop();
  
  rect(0,0,50,50);
}
/*
https://p5js.org/reference/p5/push/
https://p5js.org/reference/p5/pop/
https://p5js.org/reference/p5/angleMode/
https://p5js.org/examples/transformation-translate/
https://p5js.org/examples/transformation-rotate/
*/