// 5. Images and generative artwork
// 29. Project : generative portrait radom walk
// Step 1 : Create the random walker with lines
// Step 2 : Change the colour of the line to the image below
let catImage;
let x,y,x1,y1;

function preload() {
  //catImage = loadImage("https://placecats.com/400/400");
  catImage = loadImage("./images/catimage.jpg");
}

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  //image(catImage,0,0);
  x1 = x + random(-10,10);
  y1 = y + random(-10,10);
  line(x,y,x1,y1);
  x = x1;
  y = y1;
  
}

/*

*/