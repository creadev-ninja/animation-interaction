function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(106,137,205); // purple

  // head
  fill(255,245,126);
  noStroke();
  ellipse(200,200,300,300);
  // eyes
  fill(0,0,0);
  stroke(4);
  strokeWeight(8);
  ellipse(130,200,20,20); // x y w h
  ellipse(270,200,20,20)
  // mouth
  fill(255,0,0,90);
  noStroke();
  ellipse(200,250,40,60)
  // cheekbone
  fill(255,0,0,30);
  noStroke();
  ellipse(100,250,40,40)
  ellipse(300,250,40,40)
}
/*           red green blue * alpha
  white     : 255 255 255
  black     :  0   0   0
  red       : 255  0   0
  green     :  0  255  0
  blue      :  0   0  255
  yellow    : 255 255  0
  skyblue   :  0  255 255
  magenta   : 255  0  255
  grey      : 126 126 126
  purple    : 126 126 255
  greenClear: 126 255 126
  purple    : 126 255 255
*/