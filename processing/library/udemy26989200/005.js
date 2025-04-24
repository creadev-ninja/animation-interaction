function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204); 
  stroke(0);
  strokeWeight(1);
  // body
  rect(150,100,100,150,10); 
  // legs
  rect(177,250,15,50);
  rect(207,250,15,50);
  // eyes
  circle(177,150,42); // big
  circle(222,150,25); // small
  // pupil
  circle(180,138,10);
  circle(215,147,6);
  strokeWeight(6);
  line(185,200,215,200);
  
}
/*       
  https://p5js.org/reference/p5/rect/
  https://p5js.org/reference/p5/circle/
  https://p5js.org/reference/p5/strokeWeight/

*/