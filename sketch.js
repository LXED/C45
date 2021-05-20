var player,playerImg;
var chicken,chickenImg,ChickenGroup,obstacle,obstacleImg;
var BackgroundImg,BackGroundS,Background2,Background2Img;
var PLAY = 1;
var END = 0;
var Level2 = 2;
var gameState = PLAY;
var chickenCounter = 5;
var fuelCounter = 0;
var restart,restartImg,gameOver,gameOverImg;
var fuel,fuelImg,fuelGroup,fuelSprite,energy,energyImg,energyGroup;
var life,lifeImg;
var bosstext,bossfightImg;
var egg,eggImg,eggGroup;
var boss,bossImg;






function preload(){
playerImg = loadImage("Images/SpaceShip1.png");
BackgroundImg = loadImage("Images/Space Back.jpg");
chickenImg = loadImage("Images/Chicken Enemy.png");
restartImg = loadImage("Images/Reset.png");
gameOverImg = loadImage("Images/Game Over.png");
fuelImg = loadImage("Images/Fuel.png");
lifeImg = loadImage("Images/Life.png");
bossfightImg = loadImage("Images/bossfight.png");
Background2Img = loadImage("Images/SpaceBackground.jpg");
eggImg = loadImage("Images/Chicken Egg.png");
bossImg = loadImage("Images/BossSprite.png");
energyImg = loadImage("Images/Energy.png");


 }


function setup() {
  createCanvas(800,800);


  //Background
BackGroundS = createSprite(400,400,50,50);
BackGroundS.addImage(BackgroundImg);
BackGroundS.scale = 1;

Background2 = createSprite (400,400,50,50);
Background2.addImage(Background2Img);
Background2.scale = 3;
Background2.visible = false;


  //Player
  player = createSprite(400,700,10,10);
  player.addImage(playerImg);
  player.scale = 0.3;

  boss = createSprite(400,200,10,10);
  boss.addImage(bossImg);
  boss.scale = 0.5;
  boss.visible = false;

  restart = createSprite(400,400,10,10)
  restart.addImage(restartImg);
  restart.scale = 0.1;

  gameOver = createSprite(400,250,10,10)
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;

  fuelSprite = createSprite(25,88,10,10)
  fuelSprite.addImage(fuelImg);
  fuelSprite.scale = 0.1;

  life = createSprite(25,35,10,10)
  life.addImage(lifeImg);
  life.scale = 0.085;

  bosstext = createSprite(420,250,10,10);
  bosstext.addImage(bossfightImg);
  bosstext.visible = false;
  
  ChickenGroup = new Group();
  fuelGroup = new Group();
  eggGroup = new Group();
  energyGroup = new Group();

  
}

function draw() {
  background("black");

BackGroundS.velocityY = 3;


if(gameState === PLAY){

  gameOver.visible = false;
  restart.visible = false;

  if (BackGroundS.y > 650){
    BackGroundS.y = BackGroundS.height/4;
  }


  if(keyDown(RIGHT_ARROW)){
    player.x += 8;

  }

  if(keyDown(LEFT_ARROW)){
    player.x += -8;

  }

  if(keyDown(UP_ARROW)){
    player.y += -8;

  }

  if(keyDown(DOWN_ARROW)){
    player.y += 8;

  }

  if(ChickenGroup.isTouching(player)|| fuelGroup.isTouching(player)||eggGroup.isTouching(player)||energyGroup.isTouching(player)){
    ChickenGroup.destroyEach();
    fuelGroup.destroyEach();
    eggGroup.destroyEach();
    energyGroup.destroyEach();
    chickenCounter -= 1;
    fuelCounter += 1;
  }


  if(frameCount === 500 || fuelCounter === 5){
    
    bosstext.visible = true;

  }

  if(frameCount === 500 || fuelCounter > 5){
    bosstext.visible = false;
    fuelSprite.visible = false;
    life.visible = false;
    BackGroundS.visible = false;

    Background2.visible = true;
    boss.visible = true;
    
    ChickenGroup.destroyEach();
    fuelGroup.destroyEach();
    textSize(20);
    fill("blue");
    text("Fuel: "+ fuelCounter,50,100);
    text("Life: "+ chickenCounter,50,50);

    spawnEggs();
    spawnEnergy();

  }

  if(chickenCounter === 0){
    gameState = END;
  }

  spawnFuel()
  spawnChicken()
  drawSprites();
  textSize(20);
  fill("white");
  text("Fuel: "+ fuelCounter,50,100);
  text("Life: "+ chickenCounter,50,50);
}

else{

  
  ChickenGroup.destroyEach();
  player.x = 400;
  player.y = 700;
  BackGroundS.velocityY = 0;
  fuelGroup.destroyEach();
  gameOver.visible = true;
  restart.visible = true;
  
}


if(mousePressedOver(restart)){
  reset()
}

}



