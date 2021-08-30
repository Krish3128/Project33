const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine, world;

function preload(){

}

function setup() {
  var canvas = createCanvas(1800,1400);
  engine = Engine.create();
  world = engine.world;
 

 

  snowbg = new Snowbg();
  snow1 = new Snow();
  snow2 = new Snow();
  snow3 = new Snow();
  snow4 = new Snow();
  snow5 = new Snow();
  snow6 = new Snow();
  snow7 = new Snow();
 
}

function draw() {
  
  Engine.update(engine);

  background("black");  
 
  snowbg.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();

  drawSprites();
}