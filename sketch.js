const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var backImg , backIg , girl_walk_left, girl_walk_right , girl , ground;
var snow_var , snowImg  ;
var snow=[];
var lborder, rborder;

function preload() {
  backImg = loadImage("bg.png");
  snowImg = loadImage("snow4.webp");
  g_walk_right = loadAnimation("gr.png");
  g_walk_left= loadAnimation("gl.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  backIg = createSprite(400,100,1200,450);
  backIg.addImage("bg.png",backImg);

  
  rborder = createSprite(378, 700, 1200, 50);
  girl = createSprite(500, 700, 50, 50);
  girl.addAnimation("g_walk_left",g_walk_left);
  girl.addAnimation("g_walk_right",g_walk_right);
  girl.scale = 0.7;
  ground = createSprite(800,750,1200,15);
  ground.visible = false;

  backIg.x=backIg.width/2;
}

function draw() {
  
  background(0);  
  Engine.update(engine);
  //backIg.velocityX = -2;
  //snowfall();


  if(keyDown("RIGHT_ARROW")){
    backIg.x = backIg.x-5; 
  }
  if(keyDown("LEFT_ARROW")){
    backIg.x = backIg.x+5; 
	  girl.changeAnimation("g_walk_right",g_walk_right)
  }
  console.log(mouseX);
  if(keyDown("RIGHT_ARROW")){
    girl.changeAnimation("g_walk_left",g_walk_left)
  }
  
  if(keyDown("space")&& girl.y >= 300){
    girl.velocityY = -14;
  }
  girl.velocityY = girl.velocityY + 0.6;
  girl.collide(ground);
  Snowing();
  drawSprites();
}



  function Snowing() {
    if (frameCount % 10 === 0) {
      var snow_var= createSprite(80,0,40,10);
      
      snow_var.x = Math.round(random(0,1200));
      snow_var.addImage(snowImg);
      snow_var.scale = 0.1;
      snow_var.velocityY = 3;
      snow_var.lifetime = 250;
      snow_var.depth = girl.depth ;
      girl.depth = girl.depth + 1;
    }
  }