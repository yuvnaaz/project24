
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bin1;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bin1 = Bin(300,200,30,20);
  paper1 = Paper(100,200,radius,30,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  function keyPressed(){
	  if(keyCode === UP_ARROW){
    matter.body.applyforce(paperObject.body,paperObject.body.position,{x:85,y: -85});
	}
  }
  drawSprites();
 
}



