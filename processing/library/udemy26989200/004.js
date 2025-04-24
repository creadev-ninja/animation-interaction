function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(204); 
  noStroke(0);
  // top
  fill(232,155,221);
  ellipse(200,150,200,100);
  rect(100,150,200,50);// x,y,w,h
  // windows
  fill(0);  
  rect(125,150,50,40);
  rect(225,150,50,40);
  // body
  fill(232,85,208);   
  rect(50,200,300,50,10);  // x,y,w,h, radius
  // wheels
  fill(0);  
  circle(150,250,50); // big
  circle(250,250,50);
  fill(127);
  circle(150,250,20); // small
  circle(250,250,20);


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