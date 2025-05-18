// 5. Images and generative artwork
// 30. Project : Using the camera
let catImage;
let x, y;
let colour;
let i;
let r,g,b;
let capture;

function setup() {
  createCanvas(480, 480); // camera format
  background(255);
  //image(catImage,0,0);
  capture = createCapture(VIDEO);
  capture.hide();
  describe('A video stream from the webcam.');
}

function draw() {

    for(i=0; i<40; i++) 
    {
      x = random(0,width);
      y = random(0,height); 
      colour = capture.get(x,y);

      r = colour[0];
      g = colour[1];
      b = colour[2];
      fill(r,g,b,100);
      noStroke();
      ellipse(x,y,15,15);
    }

}

/*
  https://p5js.org/reference/p5/get/
  https://p5js.org/reference/p5/createCapture/
*/