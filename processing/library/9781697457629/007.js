// Making Dominos with Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var ground;
var boxes=[];

function setup() {
  //this is where you create canvas
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  for (let i = 0; i < 10; i++) {
    boxes.push(Bodies.rectangle(100 + (i * 40), 200, 20, 80));
    World.add(engine.world, boxes[i]);
  }

  ground = Bodies.rectangle(400, 410, 410, 30, {
    isStatic: true
  });
  //Matter.Body.rotate(ground,0.22);
  // add all of the bodies to the world
  World.add(engine.world, [ground]);

  // run the engine
  Engine.run(engine); 
  //Matter.Runner.run(engine); 
}

function draw() {
  background(51);

  // Basic demo
  // Getting vertices of each object
  for (let j = 0; j < boxes.length; j++) {
    let currentbox = boxes[j];
    var vertices = currentbox.vertices;
    fill(255);
    beginShape();
    for (var i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    endShape();
  }

  // Ground vertices
  var vertices = ground.vertices;
  beginShape();
  fill(127);
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape();
}

/*
    https://editor.p5js.org/ri1/sketches/76C7zj5pi

*/
