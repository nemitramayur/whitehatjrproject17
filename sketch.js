//declaring variables
var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var count = 0;
var deathcount= 0;
var redB;
var greenB;
var pinkB;
var blueB;
var arrowGroup

function preload(){
//loads images  
 
backgroundImage=loadImage("background0.png");

        bowImage=loadImage("bow0.png");

        arrowImage=loadImage("arrow0.png");
  
        green_balloonImage=loadImage("green_balloon0.png");

        blue_balloonImage=loadImage("blue_balloon0.png");

        red_balloonImage=loadImage("red_balloon0.png");

        pink_balloonImage=loadImage("pink_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //for creating background
   background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=3;
  background.x=background.width/2;
  
  //to create the bow
  bow=createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale=1;
  
  redB=new Group();
  greenB=new Group();
  blueB=new Group();
  pinkB=new Group();
  arrowGroup=new Group();
}
function draw() {
  
  // moving ground
    background.velocityX = -3 

  
    if (background.x < 0){
      background.x = background.width/2;
    }
  
      //moving bow
      bow.y = World.mouseY

   // shoot arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
   

      var select_balloon = Math.round(random(1,4));
     // console.log(frameCount)

 if(frameCount % 60 == 0){
    switch(select_balloon){
     case 1:  redballoon();
     break;
     case 2:  greenballoon();
     break;
     case 3:  blueballoon();
     break;
     case 4:  pinkballoon();
            break;
          default:break
           }
     }
    
      
          if(arrowGroup.isTouching(redB))
            {
              deathcount = deathcount +1;
              redB.destroyEach();
              arrowGroup.destroyEach();
            }

            if(arrowGroup.isTouching(greenB))
            {
              count = count +1;
              greenB.destroyEach();
              arrowGroup.destroyEach();
            }

            if(arrowGroup.isTouching(blueB))
            {
              count = count +3;
              blueB.destroyEach();
              arrowGroup.destroyEach();
            }

            if(arrowGroup.isTouching(pinkB))
            {
              deathcount = deathcount +2;
              pinkB.destroyEach();
              arrowGroup.destroyEach(); 
            }
    
if(redB.isTouching(bow))
  {
      deathcount=deathcount+1
    
  } 
if(pinkB.isTouching(bow))
  {
      deathcount=deathcount+1
    
  } 
if(blueB.isTouching(bow))
  {
      deathcount=deathcount+1
    
  } 
if(greenB.isTouching(bow))
  {
      deathcount=deathcount+1
    
  } 
        
  drawSprites();
    
  text("beware of red and pink balloons",180,30);
    
  text("Score : "+ count ,1,30);

  text("deaths : "+ deathcount ,440,30);
  }
  
  
function redballoon(){
  var red_balloon = createSprite(0,Math.round(random(20,370)),10,10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
  red_balloon.velocityX = 9;
  red_balloon.lifetime = 150;
  redB.add(red_balloon);
}

function greenballoon(){
  var green_balloon = createSprite(0,Math.round(random(20,370)),10,10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1
  green_balloon.velocityX = 7;
  green_balloon.lifetime = 150;
  greenB.add(green_balloon);
}

function blueballoon(){
  var blue_balloon = createSprite(0,Math.round(random(20,370)),10,10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale = 0.1
  blue_balloon.velocityX = 7;;
  blue_balloon.lifetime = 150;
  blueB.add(blue_balloon);
}

function pinkballoon(){
  var pink_balloon = createSprite(0,Math.round(random(20,370)),10,10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.5; 
  pink_balloon.velocityX = 9;
  pink_balloon.lifetime = 150;
  pinkB.add(pink_balloon);
}

  function createArrow(){
  arrow=createSprite(360,100,100,10);
  arrow.velocityX=-5;
  arrow.scale=0.3;
  arrowGroup.add(arrow);
  return arrow;
  
}
