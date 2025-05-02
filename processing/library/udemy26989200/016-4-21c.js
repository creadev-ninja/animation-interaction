// Grids, Loops and animations
//

let x;
let size;
let choice;
function setup() {
  createCanvas(400, 400);
  size=40;
  choice = 0;
  frameRate(2);
}

function draw() {
  background(26,128,179);
  for(x=size/2; x<400; x=x+size){
    for(y=size/2; y<400; y=y+size){
      //ellipse(x,y,size,size);
      choice = random(0,1);

      if(choice<0.5){
        line(x-size/2, y-size/2, x+size/2, y+size/2);
        stroke('white');
        strokeWeight(16);
      }else{
        line(x+size/2, y-size/2, x-size/2, y+size/2);
        stroke('white');
        strokeWeight(16);
      }
      
    }
  }

}