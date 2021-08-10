
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var tree;
var ;

function preload()
{
	
}


function setup() {
	createCanvas(1200, 800);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
   tree = new Tree(800,400,300,300)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
     tree.display();
//   bobObj2.display();
//   bobObj3.display();
//   bobObj4.display();
//   bobObj5.display();
//   roof.display();
//   rope1.display();
//   rope2.display();
//   rope3.display();
//   rope4.display();
//   rope5.display();
  
 
}


function keyPressed(){
	if(keyCode=UP_ARROW){
		//Matter.Body.applyForce(bobObj1.body, bobObj2.body.position , {x:-50,y:-50})
	}
}
