var wall;
var speed,weight;
var bullet;
var thickness;




function setup() {
  createCanvas(1600,400);


 thickness=random(22,83);
 speed = random(55,90);
 weight = random(400,1500) ;

 bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {

  background(0);


  if(hasCollided(bullet,wall))
{
  bullet.velocityx=0;
  var damage= 0.5 * weight * speed* speed/(thickness *thickness *thickness);


  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

 

  drawSprites();
}


function hasCollided(bullet, wall)
{
   bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge >= wallLeftEdge) 
   {
     return true;
   }
    else {
     
     return false;
   }

}

