var bullet , speed, weight;
var wall, thickness;
function setup() {
  createCanvas(800,400);
 
  
  bullet=createSprite(50,200,20,10);
  bullet.shapeColor="white";
  wall=createSprite(700,200,thickness,height/2);
  wall.shapeColor="gray";
  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet.velocityX=speed;


 
}

function draw() {
  background("black");  
 
 
  if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness* thickness);
if(damage>10)
{

wall.shapeColor=("green");

}
if(damage<10){


  wall.shapeColor=("red");
}

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{

return true;

}
return false;




}