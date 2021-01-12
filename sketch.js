const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	trashImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trashCan = createSprite(500,570,200,200)
	trashCan.addImage(trashImage)
	trashCan.scale = 0.5

	paperBall = new paper(75,650,40)
	groundy = new ground(400,675,800,50) 
	
	crate1=new bin(width/2+100, height-45, 100,10);
	crate2=new bin(width/2 + 50, height-65, 10,50);
	crate3=new bin(width/2+150, height-65, 10,50);
	

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  paperBall.display();
  groundy.display();
  crate1.display();
  crate2.display();
  crate3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x: 7, y: -30})
	}
}