function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204); 
  stroke(1);
  // left part
  rect(0,0,200,200);     // red
  rect(0,200,200,100);   // yellow
  rect(0,300,100,100);   // blue
  rect(100,300,100,100); // white
  // right part
  rect(200,0,50,250);    // white
  rect(250,0,100,150);   // red
  rect(250,150,100,100); // white
  rect(200,250,150,150); // blue
  rect(350,0,50,400);    // long white
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