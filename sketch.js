var ball1,ball2,ball3,ball4,ball5;
var player,invisibleGround;

function setup(){
  createCanvas(400,400);
  
  ball1=createSprite(150,200,10,10);
  ball2=createSprite(100,50,10,10);
  ball3=createSprite(200,200,10,10);
  ball4=createSprite(200,100,10,10);
  ball5=createSprite(300,50,10,10);
  
  player=createSprite(200,381,60,10);
  
  invisibleGround=createSprite(200,5,400,10);
  invisibleGround.visible=false;
}
function draw(){
  background(225);
  
  if(keyDown("right")){
    player.velocityX=2;
  }
  
  if(keyDown("left")){
    player.velocityX=-2;
  }
  
  if(keyDown("space")){
    ball1.velocityY=1;
  }
  
  if(keyDown("space")){
    ball2.velocityY=2;
  }
  
  if(keyDown("space")){
    ball3.velocity=3;
  }
  
  if(keyDown("space")){
    ball4.velocityY=2;
  }
  
  if(keyDown("space")){
    ball5.velocityY=3;
  }
  
  createEdgeSprites();
  ball1.bounceOff(player);
  ball1.bounceOff(invisibleGround);
  ball2.bounceOff(player);
  ball2.bounceOff(invisibleGround);
  
  
  ball4.bounceOff(player);
  ball4.bounceOff(invisibleGround);
  ball5.bounceOff(player);
  ball5.bounceOff(invisibleGround);
  
  text("save the ball from going outside the canvas",100,200);
  
  if(ball1>400){
    text("you lost",100,100);
         ball2.visible=false;
         ball3.visible=false;
         ball4.visible=false;
         ball5.visible=false;
    player.visible=false;
  }
  
  
  
  
  
  
  drawSprites();
}