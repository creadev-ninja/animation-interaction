function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(204); 
  stroke(0);
  fill(255);
  ellipse(200,150,200,100);
  rect(100,150,200,50);    // x,y,w,h
;  /*
  arc(60,210,20,20,180,270); // A // x,y,w,h,start,end
  line(60,200,340,200);      // top
  arc(340,210,20,20,270,360);// B
  line(350,210,350,240);     // right
  arc(340,240,20,20,0,90); // C 
  line(60,250,340,250);      // bottom
  arc(60,240,20,20,90,180);// D
  line(50,240,50,210);       // left
  */
  rect(50,200,300,50,10); // x,y,w,h, radius
  circle(150,250,50);
  circle(150,250,20);
  circle(250,250,50);
  circle(250,250,20);


}
/*
  https://p5js.org/reference/p5/rect/

*/