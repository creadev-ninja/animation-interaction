function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204); 
  noStroke(0);

  // body
  fill(29,77,209);
  rect(150,100,100,150,10); 
  // legs
  fill(209,77,29);
  rect(177,250,15,50);
  rect(207,250,15,50);
  // eyes
  fill(255);
  circle(177,150,42); // big
  circle(222,150,25); // small
  // pupil
  fill(0);
  circle(180,138,10);
  circle(215,147,6);
  stroke(0);
  strokeWeight(6);
  line(185,200,215,200);
  
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

  https://p5js.org/reference/p5/rect/

*/