var car1,car2,car3,car4,wall;
var lane1;
function preload(){

}
function setup() {
  createCanvas(1600,400);
  car1 = createSprite(10,50,20,20);
  car1.speed = Math.round(random(55,120));
  car1.velocityX = 20;
  car1.weight = Math.round(random(400,1500));
  car1.shapeColor = "white";
  car1.damage = (0.5*car1.weight*car1.speed*car1.speed)/22500;
  lane1 = createSprite(695,100,1390,10);
  lane1.shapeColor = "blue";
  car2 = createSprite(10,150,20,20);
  car2.speed = Math.round(random(55,120));
  car2.velocityX = 20;
  car2.weight = Math.round(random(400,1500));
  car2.shapeColor = "white";
  car2.damage = (0.5*car2.weight*car2.speed*car2.speed)/22500;
  lane1 = createSprite(695,200,1390,10);
  lane1.shapeColor = "blue";
  car3 = createSprite(10,250,20,20);
  car3.speed = Math.round(random(55,120));
  car3.velocityX = 20;
  car3.weight = Math.round(random(400,1500));
  car3.damage = (0.5*car3.weight*car3.speed*car3.speed)/22500;
  car3.shapeColor = "white";
  lane1 = createSprite(695,300,1390,10);
  car4 = createSprite(10,350,20,20);
  car4.speed = Math.round(random(55,120));
  car4.velocityX = 20;
  car4.weight = Math.round(random(400,1500));
  car4.shapeColor = "white";
  car4.damage = (0.5*car4.weight*car4.speed*car4.speed)/22500;
  wall = createSprite(1400,200,20,400);
  wall.shapeColor = "black";
  lane1.shapeColor = "blue";
}

function draw() {
  background("purple");  
  textSize(40);
  fill("white");
  textFont("impact");
  text("Simulator for checking damage in cars.",400,30);
  textFont("courier");
  stroke(20);
  if( wall.x -car1.x <=car1.width/2+  wall.width/2){
  car1.velocityX = 0;
  fill("black");
  textSize(20);
  text("damage: "+ Math.round(car1.damage),   car1.x+ 70, car1.y - 20);
   if(car1.damage > 180){
    car1.shapeColor = "red";    
    }else 
    if(car1.damage <180 && car1.damage > 80){
      car1.shapeColor = "yellow";
    }else 
    if(car1.damage < 80){
      car1.shapeColor = "green";
    }
  }
  if(wall.x -car2.x <= car2.width/2+  wall.width/2){
    car2.velocityX = 0;
    text("damage: "+ Math.round(car2.damage), car2.x + 70, car2.y - 20);
    if(car2.damage > 180){
      car2.shapeColor = "red";    
      }else if( car2.damage <180 && car2.damage > 80){
        car2.shapeColor = "yellow";
      }else if(car2.damage < 80) {
        car2.shapeColor = "green";
      }
    } 
   if(wall.x -car3.x <=car3.width/2+  wall.width/2){
      car3.velocityX = 0;
      text("damage: "+ Math.round(car3.damage), car3.x + 70, car3.y - 20);
      if(car3.damage > 180){
        car3.shapeColor = "red";    
        }else if( car3.damage < 180 && car3.damage > 80){
          car3.shapeColor = "yellow";
        }else if(car3.damage < 80){
          car3.shapeColor = "green";
        }
      }  
  if(wall.x -car4.x <=car4.width/2+  wall.width/2){
        car4.velocityX = 0;
        text("damage: "+ Math.round(car4.damage), car4.x+ 70, car4.y - 20);
        if(car4.damage > 180){
          car4.shapeColor = "red";    
          }else if(80<car4.damage <180){
            car4.shapeColor = "yellow";
          }else {
            car4.shapeColor = "green";
          }
        }

        drawSprites();
  










}
