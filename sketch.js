
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	bin1 = new Bin(310,372,120,20);
	bin2 = new Bin(260,332,20,100);
	bin3 = new Bin(360,332,20,100);
  ground = new Ground(200,390,400,20)
  ball = new Ball(100,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
bin1.display();
bin2.display();
bin3.display();
ground.display();
ball.display();

  drawSprites();
}



