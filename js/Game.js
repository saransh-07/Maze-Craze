class Game {
    constructor() {
  
    }
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    updateState(state) {
      database.ref('/').update({
        gameState: state
      })
    }
    getPhase(){
      var phaseRef = database.ref("phase");
      phaseRef.on("value",function(data){
        phase = data.val();
      })
    }
    updatePhase(g){
      database.ref('/').update({
        "phase" : g
      })
    }
    getCode() {
      var codeRef = database.ref("code");
      codeRef.on("value", function(data) {
        gameCode = data.val();
      })
    }
    updateCode(y) {
      database.ref('/').update({
        code: y
      })
    }
    async start() {
    // await  game.getPhase();
      console.log(gameState);
      if (gameState === 0) {
        player = new Player();
        var playerRef = await database.ref("playerCount").once("value");
        if (playerRef.exists()) {
          playerCount = playerRef;
          player.getCount();
        }
        form = new Form();
        form.display();
      }
  
  
      player1 = createSprite(1200, 2300, 100, 100);
  
      player2 = createSprite(1300, 2300, 100, 100);
  
  
      players = [player1, player2];
  
    }
  
  
  
  
  
    play() {
  
      form.hide();
      Player.getPlayerInfo();
  
  
  
      var index = 0;
      var x = 1100;
      var y;
      if (allPlayers !== undefined) {
        background("brown");
        textSize(20);
        
        for (var plr in allPlayers) {
          index = index + 1;
  
  
  
          x = allPlayers[plr].x;
          y = allPlayers[plr].y;
  
          if (players[index - 1] === undefined) {
            players[index - 1] = {};
          }
  
          players[index - 1].x = x;
          players[index - 1].y = y;
  
  
          
  
          if (index === player.index) {
            stroke("green");
            noFill();
            ellipse(players[index - 1].x, players[index - 1].y, 120, 120);
            camera.position.x = players[index - 1].x;
            camera.position.y = players[index - 1].y;
          }
  
  
        }
        if (selection !== undefined) {
  
          switch (allPlayers.player1.selection) {
            case 1:
              player1.addImage("hello1", playera1);
              break;
            case 2:
              player1.addImage("hello2", playera2);
              break;
            case 3:
              player1.addImage("hello3", playera3);
              break;
            case 4:
              player1.addImage("hello4", playera4);
              break;
            case 5:
              player1.addImage("hello5", playera5);
              break;
            case 6:
              player1.addImage("hello6", playera6);
              break;
            default:
              break;
          }
  
  
        }
        if (selection !== undefined) {
  
          switch (allPlayers.player2.selection) {
            case 1:
              player2.addImage("hello1", playera1);
              break;
            case 2:
              player2.addImage("hello2", playera2);
              break;
            case 3:
              player2.addImage("hello3", playera3);
              break;
            case 4:
              player2.addImage("hello4", playera4);
              break;
            case 5:
              player2.addImage("hello5", playera5);
              break;
            case 6:
              player2.addImage("hello6", playera6);
              break;
            default:
              break;
          }
  
  
        }
  
        
      }
  
      for (var i = 0; i < walls.length; i++) {
  
        if (player1.isTouching(walls[i])) {
          player1.x = 1200;
          player1.y = 250;
          if (player.index === 1) {
            player.x = player1.x;
            player.y = player1.y;
          }
  
        }
  
  
        if (player2.isTouching(walls[i])) {
          player2.x = 1200;
          player2.y = 2150;
          if (player.index === 2) {
            player.x = player2.x;
            player.y = player2.y;
          }
        }
  
  
      }
      stroke("blue");
      strokeWeight(5);
      fill("white");
      
      ellipse(600,1500,50,50);
      ellipse(300,300,50,50);
      ellipse(900,600,50,50);
      ellipse(2100,800,50,50);
      if(ref2 === true){
        if (frameCount % 60 === 0) {
          var randPos = Math.round(random(1, 4));
          switch (randPos) {
            case 1:
              zombie = createSprite(600, 1500, 10, 10);
              health = 100;
              break;
            case 2:
              zombie = createSprite(300, 300, 10, 10);
              health = 100;
              break;
            case 3:
              zombie = createSprite(900, 600, 10, 10);
              health = 100;
              break;
            case 4:
              zombie = createSprite(2100, 800, 10, 10);
              health = 100;
              break;
            default:
              break;
          }
    
    
          zombie.velocityX = 4.5;
          zombie.velocityY = -3;
          rand = Math.round(random(1, 4));
    
          switch (rand) {
            case 1:
              zombie.addImage("he", zombie1);
              break;
            case 2:
              zombie.addImage("he", zombie2);
              break;
            case 3:
              zombie.addImage("he", zombie3);
              break;
            case 4:
              zombie.addImage("he", zombie4);
              break;
            default:
              break;
          }
    
          zombies.push(zombie);
          healths.push(health);
        }
      }
     
      for (var a = 0; a < zombies.length; a++) {
        if (frameCount % 600===0) {
          if (a > 15) {
            healths[a - (Math.round(random(0, 7)))] = 0;
            healths[a - (Math.round(random(0, 7)))] = 0;
          }
         
        }
        if (healths[a] === 0) {
            zombies[a].destroy();
          }
        if (healths[a] > 0) {
          strokeWeight(2);
          stroke("black");
          noFill();
          rect(zombies[a].x - 60, zombies[a].y - 100, 100, 10);
          noStroke();
          fill("green");
          rect(zombies[a].x - 60, zombies[a].y - 100, healths[a], 10);
        }
  
        for (var g = 0; g < walls.length; g++) {
          zombies[a].bounceOff(walls[g]);
        }
  
      }
      if (player.index === 1) {
        if (player1.isTouching(door1) && player.score < 25 && player.correct<4) {
            player.x = 850;
            player.y = 1000;
            player.update();
          } else if (player1.isTouching(door2) && player.score < 50 && player.correct<4) {
            player.x = 1600;
            player.y = 1450;
            player.update();
          } 
      
          if(aimState===false && ref2 === true){
            if (keyDown(UP_ARROW) || keyDown("w") ) {
              player.y = player.y - 10;
              player1.rotation = 0;
              player.update();
            }
            if (keyDown(DOWN_ARROW) || keyDown("s"))  {
              player.y = player.y + 10;
              player1.rotation = 180;
              player.update();
            }
            if (keyDown(RIGHT_ARROW) || keyDown("d") ) {
              player.x = player.x + 10;
              player1.rotation = 90;
              player.update();
            }
            if (keyDown(LEFT_ARROW) || keyDown("a")) {
              player.x = player.x - 10;
              player1.rotation = 270;
              player.update();
            }
          }
        
       
         
      
      }
     
      if (player.index === 2) {
        if (player2.isTouching(door1) && player.score < 50 && player.correct<4) {
          player.x = 850;
          player.y = 1000;
          player.update();
        } else if (player2.isTouching(door2) && player.score < 25 && player.correct<4) {
          player.x = 1600;
          player.y = 1450;
          player.update();
        }
       
        if(aimState===false && ref2 === true){
          if (keyDown(UP_ARROW) || keyDown("w") ) {
            player.y = player.y - 10;
            player2.rotation = 0;
            player.update();
          }
          if (keyDown(DOWN_ARROW) || keyDown("s"))  {
            player.y = player.y + 10;
            player2.rotation = 180;
            player.update();
          }
          if (keyDown(RIGHT_ARROW) || keyDown("d") ) {
            player.x = player.x + 10;
            player2.rotation = 90;
            player.update();
          }
          if (keyDown(LEFT_ARROW) || keyDown("a")) {
            player.x = player.x - 10;
            player2.rotation = 270;
            player.update();
          }
        }
  
        
      }
  
    }
    end(){
      background(bg);
      camera.position.x = displayWidth/2;
      camera.position.y = displayHeight/2;
      fill("black");
      textSize(50);
      text("Game Over!!!",displayWidth/2-300,300);
      
      bg_music.pause();
      player1.destroy();
      player2.destroy();
      riddle1.destroy();
      riddle2.destroy();
      riddle3.destroy();
      riddle4.destroy();
      if(allPlayers!==undefined){
        if(allPlayers.player1.health===0 ){
            if( player.index === 1){
                text("you have lost",displayWidth/2,displayHeight/2);
            }
            if(player.index===2){
                text("you have won",displayWidth/2,displayHeight/2);
                if(musicRef2===false){
                  won.play();
                  musicRef2 = true;
                }
               
            }
         }
        if(allPlayers.player2.health===0){
           
            if( player.index === 2){
               text("you have lost",displayWidth/2,displayHeight/2);
            }
            if(player.index === 1){
                text("you have won",displayWidth/2,displayHeight/2);
                if(musicRef2===false){
                  won.play();
                  musicRef2 = true;
                }
            }
          }
         }
         
        if(allPlayers.player1.winner === true){
          if(player.index===1){
            text("you have won",displayWidth/2,displayHeight/2);
            if(musicRef2===false){
              won.play();
              musicRef2 = true;
            }
          }
         if(player.index===2){
          text("you have lost",displayWidth/2,displayHeight/2);
         }
        }
        if(allPlayers.player2.winner === true){
          if(player.index===2){
            text("you have won",displayWidth/2,displayHeight/2);
            if(musicRef2===false){
              won.play();
              musicRef2 = true;
            }
          }
         if(player.index===1){
          text("you have lost",displayWidth/2,displayHeight/2);
         }
        }
        
      for(var s = 0;s<walls.length;s++){
            walls[s].destroy();
      }
      for(var n=0;n< zombies.length;n++){
        healths[n] = 0;
        if(healths[n]===0){
          zombies[n].destroy();
        }
      }
    }
  } 