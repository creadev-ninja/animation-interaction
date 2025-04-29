// Paint App 3.0
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
 
}

function mouseDragged(){
  stroke(255,0,0);
  strokeWeight(10);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

/*
  https://p5js.org/reference/p5/mouseX/
  https://p5js.org/reference/p5/pmouseX/
*/