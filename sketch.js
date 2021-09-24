
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball, ground, leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(550,680,1100,20);
	leftSide = new Ground(750,612,20,120);
	rightSide = new Ground(950,612,20,120);

	var ball_options = {
    isStatic :false,
	restitution: 0.3,
	friction:0,
	density:1.2,

	}

	ball = Bodies.circle(350,50,30,ball_options);
	World.add(world, ball);



	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);

  fill("red");
  ellipse(ball.position.x,ball.position.y,30);

  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:125,y:-125});
	}
}


