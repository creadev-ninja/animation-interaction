let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);
  noFill();
  stroke(0, 255, 0);
  strokeWeight(10);
  //for making stem
  bezier(0, 0, 100, 200, 200, 300, 400, 400);
  bezier(400, 400, 200, 200, 300, 300, 100, 0);

}

function draw() {
  
  //Flowers
  let b = map(sin(angle), -1, 1, 10, 80);
  translate(mouseX, mouseY);
  rotate(angle);
  noFill();
  strokeWeight(2);
  stroke(mouseX+b , mouseY-b , mouseY-b);
  rect(0, 0, b, b);

  angle += 0.03;
}


/*
  https://editor.p5js.org/ri1/sketches/3HvcYcHyU
  https://p5js.org/reference/p5/loadImage/
  https://p5js.org/reference/p5/createCanvas/
  https://p5js.org/reference/p5/vertex/
*/