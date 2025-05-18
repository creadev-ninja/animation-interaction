// 5. Images and generative artwork
// 29. Project : generative portrait radom walk
// Step 1 : Create the random walker with lines
// Step 2 : Change the colour of the line to the image below
let catImage;
let x,y,x1,y1;
let colour;
let i;

function preload() {
  //catImage = loadImage("https://placecats.com/400/400");
  catImage = loadImage("./images/catimage.jpg");
}

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
  for(i=0; i<10; i++) {
    //image(catImage,0,0);
    x1 = x + random(-10,10);
    y1 = y + random(-10,10);
    colour = catImage.get(x,y);
    stroke(colour);
    strokeWeight(2);
    line(x,y,x1,y1);
    x = x1;
    y = y1;
    
    if(x<0 || x>width || y<0 || y>height) {
      x = random(0,width);
      y = random(0,height);
    }
  } 
}

/*

*/