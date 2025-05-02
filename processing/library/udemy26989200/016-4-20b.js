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
  for(i=0; i<8; i=i+1) {
    //line(0,0,200,0);
    ellipse(40,0,20,20);
    rotate(22.5);
    ellipse(70,0,20,20);
    rotate(-22.5);
    ellipse(100,0,20,20);
    rotate(45);
  }
  pop();
}
/*
https://p5js.org/reference/p5/push/
https://p5js.org/reference/p5/pop/
https://p5js.org/reference/p5/angleMode/
https://p5js.org/examples/transformation-translate/
https://p5js.org/examples/transformation-rotate/
*/