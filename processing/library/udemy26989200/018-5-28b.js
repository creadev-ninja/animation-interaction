// 5. Images and generative artwork
// 28. Project : generative portrait
// Step 1 : Make random dots appears across the screen
// Step 2 : Make each dot be the colour of the image below
let catImage;
let x, y;
let colour;
function preload() {
  //catImage = loadImage("https://placecats.com/400/400");
  catImage = loadImage("./images/catimage.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(220);
  //image(catImage,0,0);
}

function draw() {

  x = random(0,width);
  y = random(0,height); 
  colour = catImage.get(x,y);
  fill(colour);
  noStroke();
  ellipse(x,y,10,10);

}

/*
  https://p5js.org/reference/p5/get/

*/