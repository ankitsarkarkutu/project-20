var car,wall,walli;
var speed,weight;

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,50, height/2);
  wall.shapeColor = (80,80,80);
  //walli = createSprite(890,200,30,height/3);
  car.velocityX = 0;
  car.velocityX = speed;
 // car.collide(walli);
  
 
}

function draw() {
  background(0); 
    
  if (wall.x- car.x < (car.width+wall.width)/2){
    
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed/22509;
    
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    
  if(deformation<180 && deformation>100 ){
     car.shapeColor = color(230,230,0)
    }
    
   if(deformation <100){
      car.shapeColor = color(0,255,0);
    }
    }
  ;
  
  
  drawSprites();
}