// Grids, Loops and animations
// Loop 3 random
let x;
let size = 20;
let shape = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(5);
  rectMode(CENTER);
}

function draw() {
  background(220);

  for(x=25; x<400; x=x+50){
    
    for(y=25; y<400; y=y+50) {
      size = random(10,40);
      shape = random(0,1);

      if(shape<0.5){
        ellipse(x,y,size,size);
      }else{
        rect(x,y,size,size);
      } // if end

    } // for 2 end
    
  } // for 1 end
} // function end
/*
  https://p5js.org/reference/p5/for/
  https://p5js.org/reference/p5/rectMode/
  https://p5js.org/examples/calculating-values-random/
  https://p5js.org/reference/p5/frameRate/
*/