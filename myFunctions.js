function spawnChicken(){
    if(frameCount % 60 === 0){
    chicken = createSprite(Math.round(random(50,750)),-50,10,10);
    chicken.addImage(chickenImg)
    chicken.velocityY = 5;
    chicken.scale = 0.2;
    chicken.lifetime = 160;
    ChickenGroup.add(chicken);
    }
  
  }
  
  function spawnRocket(){
  
  
  }
  
  function reset(){
  gameState = PLAY;
  chickenCounter = 5;
  fuelCounter = 0;
  gameOver.visible = false;
  restart.visible = false;
  
  }
  
  function spawnFuel(){
    if(frameCount % 150 === 0){
      fuel = createSprite(Math.round(random(50,750)),-50,10,10);
      fuel.addImage(fuelImg);
      fuel.velocityY = 8;
      fuel.velocityX = Math.round(random(4,-4));;
      fuel.lifetime = 160;
      fuel.scale = 0.1;
      fuelGroup.add(fuel);
  
  
    }
  }
  
  function spawnEggs(){
    if(frameCount % 60 === 0){
    egg = createSprite(Math.round(random(50,750)),0,10,10);
    egg.addImage(eggImg)
    egg.velocityY = 5;
    egg.scale = 0.080;
    egg.lifetime = 160;
    eggGroup.add(egg);
    }
  
  }
  
  function spawnEnergy(){
    if(frameCount % 150 === 0){
      energy = createSprite(Math.round(random(50,750)),-50,10,10);
      energy.addImage(energyImg);
      energy.velocityY = 8;
      energy.velocityX = Math.round(random(4,-4));;
      energy.lifetime = 160;
      energy.scale = 0.080;
      energyGroup.add(energy);
  
  
    }
  }