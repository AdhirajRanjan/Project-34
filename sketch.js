
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter=30;

	Engine.run(engine);
	startBobPositionX=width/2;
	

	roof = new Roof(410,150,425,50)
	//bob1=new BOB(400,300,30)
	//bob2=new BOB(100,300,30)
	//bob3=new BOB(200,300,30)
	//bob4=new BOB(150,300,30)
	//bob5=new BOB(360,300,30)
	bob1 = new BOB(240,450,30);
	bob2 = new BOB(300,450,30);
	bob3 = new BOB(360,450,30);
	bob4 = new BOB(420,450,30);
	bob5 = new BOB(480,450,30);

	
/*rope1=new Rope(bob1.body,roof.body,0,0)
rope2=new Rope(bob2.body,roof.body,60,0)
rope3=new Rope(bob3.body,roof.body,-120,0)
rope4=new Rope (bob4.body,roof.body,120,0)
rope5=new Rope(bob5.body,roof.body,-60,0)*/

rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)

	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
rope1.display()
bob2.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display();
rope4.display()
bob5.display()
rope5.display();


drawSprites();


}

function mouseDragged()
{
		Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY})
}



