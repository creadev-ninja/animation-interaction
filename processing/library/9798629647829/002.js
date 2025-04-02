let mic
let vol

function setup() {
  createCanvas(400, 400);
  //background(175);
 // mic=new p5.AudioIn();
 // mic.start();
}

function draw() { 
  background(225,255,255,0);
  stroke(10);
  strokeWeight(10);
  //text(mouseX, 200, 30)
  //text(mouseY, 240, 30)
  
  noFill();
  stroke(120, 175, 0);
  strokeWeight(46);

  bezier(0, 0, 73, 122, 86, 279, 104, 497);

  strokeWeight(16);
  bezier(104, 497, 133, 291, 178, 257, 271, 217);
  bezier(71, 304, 43, 273, 33, 259, 0, 213);
  bezier(72, 159, 113, 84, 128, 54, 133, 0);
  bezier(98, 120, 128, 103, 186, 69, 223, 57);

  strokeWeight(16);
  bezier(340, 18, 327, 55, 314, 94, 314, 131);
  strokeWeight(11);
  bezier(287, 39, 298, 49, 303, 59, 314, 86);
  bezier(362, 34, 351, 41, 342, 55, 327, 71);

  //beak
  fill(210, 105, 225);
  stroke(210, 105, 225);
  strokeWeight(3);
  
  //vol=mic.getLevel();
  bezier(226, 146, 266, 147-vol*100, 253-vol*100, 150, 230, 153);
  bezier(226, 158, 261, 155+vol*100, 237, 156+vol*100, 230, 153);
  
  //body
  noFill();
  stroke(40, 215, 225);
  strokeWeight(5);
  bezier(229, 154, 215, 123, 186, 124, 176, 174);
  bezier(176, 174, 174, 193, 165, 203, 148, 220);
  bezier(148, 220, 115, 262, 125, 264, 161, 239);
  bezier(161, 239, 146, 263, 119, 290, 126, 298);
  bezier(126, 298, 140, 318, 153, 278, 173, 249);
  bezier(173, 249, 222, 253, 230, 183, 218, 178);
  bezier(218, 178, 210, 168, 222, 164, 229, 154);
  
  //design
  fill(210, 105, 225);
  stroke(110, 215, 225);
  strokeWeight(4);
  bezier(173, 190, 176, 205, 177, 225, 161, 238);
  
  stroke(175);
  strokeWeight(1);
  bezier(159, 211, 146, 259, 137, 253, 147, 225);
  
  stroke(210, 105, 225);
  bezier(219, 182, 202, 195, 191, 213, 179, 245);

  //legs
  noFill();
  stroke(100);
  strokeWeight(5);
  bezier(180, 258, 183, 249, 191, 254, 194, 259);
  bezier(196, 252, 199, 242, 208, 245, 210, 251);

  //eyes
  bezier(203, 154, 209, 147, 211, 151, 212, 154);

}
/*
  https://editor.p5js.org/ri1/sketches/fsMJTmhf   
  https://p5js.org/reference/p5/createCanvas/

*/