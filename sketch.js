var quack;
var game, player, form, database; 
var canvas, playerCountRef, playerCount = 0;
var allPlayers, playerInfoRef;
var gameState = 0;
var player1, player2;
var gameCode;
var bg_music;
var riddle1;
var riddle2;
var riddle3;
var riddle4;
var riddle5;
var rid_img;
var phase;
var failureMsg;
var ref3;
var musicRef2 = false;
var ref,ref2;
// link for zombie death sound => https://www.youtube.com/watch?v=KJnX8RTMKXA 
// link for difficult game music (hp theme song) => https://www.youtube.com/watch?v=Htaj3o3JD8I
var musicRef = false;
var walls;
var wall1, wall2,maze;
var wall3,wall4;
var wall5,wall6,wall7;
var wall8,wall9,wall10,wall1,wall12,wall13,wall14;
var wall15,wall16,wall17;
var wall18,wall19,wall20;
var wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32;
var imageDisplay;
var zombies;
var players;
var bullets;
var sTime;
var option1, option2, option6, option3, option4, option5;
var on_entry, gunshot;
var bg;
var rand;
var teleCentre2;
//1200,300
var person1, person2,person3, person4,person5,person6;
var zombie1, zombie2, zombie3, zombie4;
var selection;
var playera1,playera2,playera3,playera4,playera5,playera6;
var player1,player2;
var selState;
//var code;
var ridInput;
var zombie_icon;
var verify = false;
var b = 0;
var ext;
var playRef;
var vRef;
var collision1,collision2;
var zombie;
var direction;
var bullet_img;
var bullets2;
var aimState;
var healths;
var door1,door2 ;
var ridValue;
var health;
var zombie_death;
var crown, crown_img;
var teleCentre;
var musicT;
var tele_img;
var zm1;
var code;
var ridIndex;
var ridQ;
var zm2,zm3,zm4;
var rid_greeting;
var ridSubmit;
var monster;
var successMsg;
// spooky bg music => https://www.youtube.com/watch?v=70HCGgKog_U
var won;
function preload(){
bg = loadImage("../images/bg.jpg");
zombie1 = loadImage("../images/zombie1.png");
zombie2 = loadImage("../images/zombie2.png");
zombie3 = loadImage("../images/zombie3.png");
zombie4 = loadImage("../images/zombie4.png");
person1 = loadImage("../images/person1.jpg");
person2 = loadImage("../images/person2.jpg");
person3 = loadImage("../images/person3.jpg");
person4 = loadImage("../images/person4.jpg");
person5 = loadImage("../images/person5.jpg");
person6 = loadImage("../images/person6.jpg");
playera1 = loadImage("../images/PLAYER1.png"); 
playera2 = loadImage("../images/PLAYER2.png"); 
playera3 = loadImage("../images/PLAYER3.png"); 
playera4 = loadImage("../images/PLAYER4.png"); 
playera5 = loadImage("../images/PLAYER5.png"); 
playera6 = loadImage("../images/PLAYER6.png"); 
bullet_img = loadImage("../images/bullet.png");
on_entry = loadSound("../Sounds/ON-ENTRY.mp3");
gunshot = loadSound("../Sounds/gunshot.mp3");
zombie_death = loadSound("../Sounds/zombie_death.mp3");
won = loadSound("../Sounds/Win.mp3");
crown_img = loadImage("../images/crown.png");
bg_music = loadSound("../Sounds/bg_music.mp3");
tele_img = loadImage("../images/teleCentre.png");
zombie_icon = loadImage("../images/zombie_icon.png");
rid_img = loadImage("../images/Riddle.png");
quack = loadSound("../Sounds/quack.mp3")
}
function setup(){
database = firebase.database();
canvas = createCanvas(displayWidth-10,displayHeight - 100);
bullets1 = [];
bullets2 = [];
on_entry.play();
ref3 = false;
aimState = false;
 code = char(random(65,90))+char(random(97,122))+char(random(48,57))+ char(random(48,57))+char(random(97,122)) +char(random(65,90));
ridValue = "";
ref = false;
ref2 = true;
zombies = [];
collision1 = false;
collision2 = false;
healths = [];
ridIndex=0;

ridSubmit = createButton("Submit");
ridSubmit.position(displayWidth/2-600,displayHeight/2+140);
ridSubmit.hide();
ridQ = createElement("h3");
ridQ.position(displayWidth/2-600,displayHeight/2+30);
ridQ.html(" ");
ridQ.hide();
ridInput = createInput("Answer");
ridInput.position(displayWidth/2-600,displayHeight/2+44+70);
ridInput.hide();
teleCentre2 = createSprite(300,1200);
teleCentre2.addImage(tele_img);
teleCentre = createSprite(900,2100);
teleCentre.addImage(tele_img);
teleCentre.scale = 0.5;
teleCentre2.scale = 0.5;
successMsg = createElement("h3");
successMsg.html("Congrtas!!! Move on.");
successMsg.position(displayWidth/2-600,displayHeight/2+50);
successMsg.hide();
failureMsg = createElement("h3");
failureMsg.html("Sorry.Try once more");
failureMsg.position(displayWidth/2-600,displayHeight/2+10);
failureMsg.hide();
direction = "right";
vRef = 0;
rid_greeting = createElement("h3");
rid_greeting.html("To pass the doors you must find the answer to this one");
rid_greeting.position(displayWidth/2-600,displayHeight/2-10);
rid_greeting.hide();
riddle1 = createSprite(300,700);
riddle1.addImage("riddle",rid_img);
riddle1.scale = 0.3;
riddle2 = createSprite(300,2100);
riddle2.addImage("riddle",rid_img);
riddle2.scale = 0.3;
riddle3 = createSprite(2100,300);
riddle3.addImage("riddle",rid_img);
riddle3.scale = 0.3;
riddle4 = createSprite(2100,2100);
riddle4.addImage("riddle",rid_img);
riddle4.scale = 0.3;

//code = char(random(65,90))+char(random(97,122))+char(random(48,57))+ char(random(48,57))+char(random(97,122)) +char(random(65,90));
selection = 0;
game = new Game();
game.getState();
game.start();
player.getCount();
 selState = 0;
 zm1 = createSprite(600,1500);
 zm1.addImage(zombie_icon);
 zm1.scale = 0.2;
 zm2 = createSprite(300,300);
 zm2.addImage(zombie_icon);
 zm2.scale = 0.2;
 zm3 = createSprite(900,600);
 zm3.addImage(zombie_icon);
 zm3.scale = 0.2;
 zm4 = createSprite(2100,800);
 zm4.addImage(zombie_icon);
 zm4.scale = 0.2;
sTime = 0;
monster = createSprite(displayWidth/2,displayHeight/2);
monster.addImage("zombie",zombie4);
monster.scale = 2;
monster.visible = false;
monster.x = -100000000;
 crown = createSprite(1150,1340);
 crown.addImage("corwn",crown_img);
 crown.scale = 0.4;
 door1 = createSprite(850,1095,300,10);
 door1.shapeColor = "orange";
 door2 = createSprite(1505,1450,10,300);
 door2.shapeColor = "orange";
wall1 = createSprite(150,1200,100,2200);
wall1.shapeColor = rgb(169,208,142);
//zombie = createSprite(1200,2300,50,50);
 wall2 = createSprite(600,150,1000,100);
 wall2.shapeColor = rgb(169,208,142);
 wall3 = createSprite(2250,1200,100,2200);
 wall3.shapeColor = rgb(169,208,142);
 wall4 = createSprite(750,350,100,300);
 wall4.shapeColor = rgb(169,208,142);
 imageDisplay = false;
 wall5 = createSprite(1650,400,100,600);
 wall5.shapeColor = rgb(169,208,142);
wall6 = createSprite(1200,750,1600,100);
wall6.shapeColor = rgb(169,208,142);
wall7 = createSprite(450,550,100,300);
wall7.shapeColor =rgb(169,208,142);
wall8 = createSprite(2050,450,300,100);
wall8.shapeColor = rgb(169,208,142);
wall9 = createSprite(1350,450,500,100);
wall9.shapeColor = rgb(169,208,142);
wall10 = createSprite(1050,950,100,300);
wall10.shapeColor = rgb(169,208,142);
wall11 = createSprite(1250,1050,500,100);
wall11.shapeColor = rgb(169,208,142);
wall12 = createSprite(1250,1250,100,300);
wall12.shapeColor = rgb(169,208,142);
wall13 = createSprite(350,1050,300,100);
wall13.shapeColor = rgb(169,208,142);
wall14 = createSprite(450,1300,100,600);
wall14.shapeColor = rgb(169,208,142);
wall15 = createSprite(650,2250,900,100);
wall15.shapeColor = rgb(169,208,142);
wall16 = createSprite(1750,2250,900,100);
wall16.shapeColor = rgb(169,208,142);
wall17 = createSprite(1050,2050,100,300);
wall17.shapeColor = rgb(169,208,142);
wall18 = createSprite(1350,2050,100,300);
wall18.shapeColor = rgb(169,208,142);
wall19 = createSprite(700,1950,600,100);
wall19.shapeColor = rgb(169,208,142);
wall20 = createSprite(750,1750,100,300);
wall20.shapeColor = rgb(169,208,142);
wall21 = createSprite(1700,1950,600,100);
wall21.shapeColor = rgb(169,208,142);
wall22 = createSprite(1450,1650,900,100);
wall22.shapeColor = rgb(169,208,142);
wall23 = createSprite(1010,1450,20,300);
wall23.shapeColor = rgb(169,208,142);
wall24 = createSprite(850,1350,300,100);
wall24.shapeColor = rgb(169,208,142);
wall25 = createSprite(750,1250,100,300);
wall25.shapeColor = rgb(169,208,142);
wall26 = createSprite(1400,1350,200,100);
wall26.shapeColor = rgb(169,208,142);
wall27 = createSprite(2050,450,300,100);
wall27.shapeColor = rgb(169,208,142);
wall28 = createSprite(2050,1050,300,100);
wall28.shapeColor = rgb(169,208,142);
wall29 = createSprite(2050,1350,300,100);
wall29.shapeColor = rgb(169,208,142);
//wall30 = createSprite(1850,1500,100,400);
//wall30.shapeColor = rgb(169,208,142);
wall30 = createSprite(1800,150,1000,100);
wall30.shapeColor = rgb(169,208,142);
wall31 = createSprite(1200,2250,200,100);
wall31.visible = false;
wall32 = createSprite(1200,150,200,100);
wall32.visible = false;
walls = [wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30];
/*zombie.velocityX = 8;
zombie.velocityY = -6;
camera.position.x = zombie.x;
camera.position.y = zombie.y;*/

game.getPhase();
}
function draw(){
background(bg);
game.getPhase();

if(gameState===0){
    if(option1!==undefined){
        option1.display();
    }
    if(option2!==undefined){
        option2.display();
    }
    if(option3!==undefined){
        option3.display();
    }
    if(option4!==undefined){
        option4.display();
    }
    if(option5!==undefined){
        option5.display();
    }
    if(option6!==undefined){
        option6.display();
    }
    if(selState===0){
        if(option1!==undefined){
            if(mousePressedOver(option1)){
                    selection = 1;
                    option1.scale = 1.5;
                    selState = 1;
                    player.selection = selection;
                } 
                }
                
                if(option2!==undefined){
                    if(mousePressedOver(option2)){
                            selection = 2;
                            option2.scale = 1.5;
                            selState = 1;
                            player.selection = selection;
                        } 
                        }
                if(option3!==undefined){
                    if(mousePressedOver(option3)){
                            selection = 3;
                            option3.scale = 1.5;
                            selState = 1;
                            player.selection = selection;
                    } 
                }
                if(option4!==undefined){
                    if(mousePressedOver(option4)){
                        selection = 4;
                        option4.scale = 1.5;
                        selState = 1;
                        player.selection = selection;
                    } 
                }
                if(option5!==undefined){
                    if(mousePressedOver(option5)){
                        selection = 5;
                        option5.scale = 1.5;
                        selState = 1;
                        player.selection = selection;
                    } 
                }
                if(option6!==undefined){
                    if(mousePressedOver(option6)){
                        selection = 6;
                        option6.scale  = 1.5;
                        selState = 1;
                        player.selection = selection;
                    }  
                }
    }
   
    
    
    
    
    
}
if(gameState===0){
   
    b = b+60;
   
        switch(b){
            case 3600 : ext = ".";
             break;
             case 7200 : ext = "..";
             break;
             case 10800 : ext = "...";
             break;
             default : break;
        }
       
        if(b>10800){
            b=0;
        }
        textSize(25)
        fill("red");
        
        if(playRef!== undefined){
            fill("white");
            strokeWeight("5");
            stroke("blue");
            text(playRef,displayWidth/2,displayHeight/4 + 100);
            text("Please Wait"+ ext,displayWidth/2,displayHeight/4 + 120);
        }
        
}
if(playerCount === 2){
    if(ref3 === false){
        game.updateState(1);
        ref3 = true;
    }
   
}
if(gameState===1){
    clear();
    teleCentre.rotation+=4;
    teleCentre2.rotation+=4;
   
    if(musicRef===false){
        bg_music.play();
        musicT = frameCount;
        musicRef = true;
    }
   
    if(frameCount>musicT+307*20){
        musicRef = false;
    }
    //x - 4.5, y - -3
   if(players[player.index-1].isTouching(riddle1) && keyWentDown("r")){
       ref2 = false;
       for(var a = 0;a<zombies.length;a++){
           zombies[a].velocityX = 0;
           zombies[a].velocityY = 0;
       }
       riddle1.destroy();
ridIndex = 1;
ridInput.show();
ridQ.html("I am a home for royalty.<br>There are many of me in England.<br>I am made of stone.")
ridQ.show();
rid_greeting.show();
ridSubmit.show();
}
 if(players[player.index-1].isTouching(riddle2) && keyWentDown("r")){
    ref2 = false;
    for(var a = 0;a<zombies.length;a++){
        zombies[a].velocityX = 0;
        zombies[a].velocityY = 0;
    }
     riddle2.destroy();
ridIndex = 2;
ridInput.show();
ridQ.html("It cannot be seen, it weighs nothing,<br>but when you put it in a barrel it makes it lighter.<br>What is it?")
ridQ.show();
rid_greeting.show();
ridSubmit.show();
}
if(players[player.index-1].isTouching(riddle3) && keyWentDown("r")){
    ref2 = false;
    for(var a = 0;a<zombies.length;a++){
        zombies[a].velocityX = 0;
        zombies[a].velocityY = 0;
    }
    riddle3.destroy();
    ridIndex = 3;
    ridInput.show();
    ridQ.html("If two’s company, and three’s a crowd, what are four and five?")
    ridQ.show();
    rid_greeting.show();
    ridSubmit.show();
    }
    if(players[player.index-1].isTouching(riddle4) && keyWentDown("r")){
        ref2 = false;
        for(var a = 0;a<zombies.length;a++){
            zombies[a].velocityX = 0;
            zombies[a].velocityY = 0;
        }
        ridIndex = 4;
        riddle4.destroy();
        ridInput.show();
        ridQ.html("What begins with T, finishes with T, and has T in it?")
        ridQ.show();
        rid_greeting.show();
        ridSubmit.show();
        }
 ridSubmit.mousePressed(function(){
ridValue = ridInput.value();
if(ridIndex === 1){
    if(ridValue === "Castle"){
       ridQ.hide();
       rid_greeting.hide();
       ridSubmit.hide();
       ridInput.hide();
       player.correct +=1;
       successMsg.show();
if(ref2 === false){
    for(var a =0;a<zombies.length;a++){
        zombies[a].velocityX = 4.5;
        zombies[a].velocityY = 3;
    }
    ref2 = true;
}
    }else{
       failureMsg.show();
    }
}
if(ridIndex === 2){
    if(ridValue === "Hole"){
        ridQ.hide();
        rid_greeting.hide();
        ridSubmit.hide();
        ridInput.hide();
        player.correct +=1;
        successMsg.show();
        if(ref2 === false){
            for(var a =0;a<zombies.length;a++){
                zombies[a].velocityX = 4.5;
                zombies[a].velocityY = 3;
            }
            ref2 = true;
        }
     }else{
        failureMsg.show();
     }
}
if(ridIndex === 3){
    if(ridValue === "Nine"){
        ridQ.hide();
        rid_greeting.hide();
        ridSubmit.hide();
        ridInput.hide();
        player.correct +=1;
        successMsg.show();
        if(ref2 === false){
            for(var a =0;a<zombies.length;a++){
                zombies[a].velocityX = 4.5;
                zombies[a].velocityY = 3;
            }
            ref2 = true;
        }
     }else{
        failureMsg.show();
     }
}
if(ridIndex === 4){
    if(ridValue === "Teapot"){
        ridQ.hide();
        rid_greeting.hide();
        ridSubmit.hide();
        ridInput.hide();
        player.correct +=1;
        successMsg.show();
        if(ref2 === false){
            for(var a =0;a<zombies.length;a++){
                zombies[a].velocityX = 4.5;
                zombies[a].velocityY = 3;
            }
            
            ref2 = true;
        }
     }else{
        failureMsg.show();
     }
}
 },sTime++);
 if(sTime>120){
     sTime = 0 ;
     successMsg.hide();
     failureMsg.hide();
 }
 
    game.play();
    fill("red");
    stroke("blue");
    strokeWeight(4);
    ellipse(300,1200,120,120);
    ellipse(900,2100,120,120);
    if(player.index === 1){
        if(player1.isTouching(teleCentre)){
           if(keyDown("t")){
               player.x = 2100;
               player.y = 1500;
               player.update();
           }
        }
        if(player1.isTouching(teleCentre2)){
            if(keyDown("t")){
                player.x = 2100;
                player.y = 300;
                player.update();
            }
         }
    }
    if(player.index === 2){
        if(player2.isTouching(teleCentre)){
           if(keyDown("t")){
               player.x = 2100;
               player.y = 1500;
               player.update();
           }
        }
        if(player2.isTouching(teleCentre2)){
            if(keyDown("t")){
                player.x = 2100;
                player.y = 300;
                player.update();
            }
         }
    }
    
  
 if(keyWentDown("z")){
      aimState = true;
 }
 if(keyWentDown("x")){
    aimState = false;
}
if(aimState===true){
    if(keyWentDown(UP_ARROW) || keyWentDown("w")){
        direction = "up";
 
    }
    if(keyWentDown(RIGHT_ARROW)|| keyWentDown("d") ){
     direction = "right";
     
 } 
 if(keyWentDown(LEFT_ARROW) || keyWentDown("a")){
     direction = "left";
     
 }
 if(keyWentDown(DOWN_ARROW)|| keyWentDown("s")){
     direction = "down";
     
 }
}
   
    
  
 if(keyWentDown("space")){
     gunshot.play();
     shoot();
 }
 for(var a = 0; a < zombies.length;a++){

     if(zombies[a].isTouching(player1)&&player.index === 1){
        healths[a] = 0;
        zombies[a].destroy();
         player.health-=200;
         player.update();
     }
     if(zombies[a].isTouching(player2)&&player.index === 2){
        healths[a] = 0;
        zombies[a].destroy();
        player.health-=200;
        player.update();
    }
 }


 if(allPlayers!==undefined){
if(allPlayers.player1.health===0){
    player1.destroy();
    if( player.index === 1){
        text("you have lost",player.x,player.y - 450);
    }
    if(player.index===2){
        text("you have won",player.x,player.y - 450);
    }
    game.updateState(2);
    game.end();
}
if(allPlayers.player2.health===0){
    player2.destroy();
    if( player.index === 2){
        text("you have lost",player.x,player.y - 450);
    }
    if(player.index === 1){
        text("you have won",player.x,player.y - 450);
    }
    game.updateState(2);
    game.end();
}
 }
 

 for(var h = 0; h<bullets2.length; h++){
    for(var t = 0; t < zombies.length; t++){
        for(var l = 0;l< walls.length;l++){
            if(bullets2[h].isTouching(walls[l])){
                bullets2[h].destroy();
            }
        }
            if(bullets2[h].isTouching(zombies[t])){
               healths[t] -=50;
                bullets2[h].destroy();
                if(healths[t]===0){
                    zombies[t].destroy();
                    zombie_death.play();
                    player.score++;
                    player.update();
                }
            }
    }
}
for(var h = 0; h<bullets1.length; h++){
    for(var t = 0; t < zombies.length; t++){
        for(var l = 0;l< walls.length;l++){
            if(bullets1[h].isTouching(walls[l])){
                bullets1[h].destroy();
            }
        }
            if(bullets1[h].isTouching(zombies[t])){
                healths[t] -=50;
                bullets1[h].destroy();
                if(healths[t]===0){
                    zombies[t].destroy();
                    zombie_death.play(); 
                    player.score++;
                    player.update();
                }
            }
    }
}  
      
drawSprites();
if(allPlayers!==undefined){
    if(player.index===1){
        strokeWeight(5);
        stroke("red");
        fill("white");
        text(allPlayers.player1.name + ":" +allPlayers.player1.score, allPlayers.player1.x - 200,allPlayers.player1.y - 200 );
        text(allPlayers.player2.name + ":" +allPlayers.player2.score, allPlayers.player1.x - 200,allPlayers.player1.y - 150 ); 
    }
    if(player.index===2){
        strokeWeight(5);
        stroke("red");
        fill("white");
        text(allPlayers.player1.name + ":" +allPlayers.player1.score, allPlayers.player2.x - 200,allPlayers.player2.y - 200 );
        text(allPlayers.player2.name + ":" +allPlayers.player2.score, allPlayers.player2.x - 200,allPlayers.player2.y - 150 );
    }       
}



  
  if(allPlayers!==undefined){
      if(allPlayers.player1.health >0){
        noFill();
        strokeWeight(1);
        stroke("black");
        rect(player1.x-50,player1.y-100,100,10);
        fill("green");
        noStroke();
        rect(player1.x-50,player1.y-100,allPlayers.player1.health/20,10);
      }
      if(allPlayers.player2.health>0){
        noFill();
        strokeWeight(1);
        stroke("black");
        rect(player2.x-50,player2.y-100,100,10);
        fill("green");
        noStroke();
        rect(player2.x-50,player2.y-100,allPlayers.player2.health/20,10);
      }
   

  }
    
if(players[player.index-1].isTouching(crown)){
    crown.x=2500;
    quack.play();
    game.updatePhase(1);
    monster.visible = true;
    bg_music.pause();
   monster.x = displayWidth/2;
   monster.velocityX = -5;
   monster.velocityY = -10;
    musicRef = false;
}



push();
translate(player.x-300,player.y-300);
noFill();
strokeWeight(10);
stroke("blue");
ellipse(0,0,50,50);
stroke("red");
if(direction==="right"){
    line(0,0,45,0);
}
if(direction==="left"){
    line(0,0,-45,0);
}
if(direction==="down"){
    line(0,0,0,45);
}
if(direction==="up"){
    line(0,0,0,-45);
}
pop();

    if(phase === 1 && phase !==undefined){
        door1.destroy();
        door2.destroy();
        if(crown.x!==2500){
            crown.x = 2500;
        }
        if(monster.x === -100000000){
            monster.x = displayWidth/2;
            monster.velocityX = -5;
            monster.velocityY = -10;
            monster.visible = true;
        }
        if(player.monsterH > 0){
            noStroke();
            fill("green");
            rect(monster.x-50, monster.y - 200, player.monsterH/50, 15);
            strokeWeight(2);
            stroke("black");
            noFill();
            rect(monster.x - 50,monster.y - 200,100,15);
            
        }
      if(player1.isTouching(crown) && player.health!==0){
          crown.destroy();
          
        player1.destroy();
        player2.destroy();
        player.winner = true;
        player.update();
          game.updateState(2);
          game.end();
         
      }
      if(players[player.index-1].isTouching(monster)){
          player.health -= 300;
          player.x = 1600;
          player.y = 1450;
          player.update();
      }
      if(player2.isTouching(crown) && player.health!==0){
          crown.destroy();
          player1.destroy();
        player2.destroy();
        player.winner = true;
        player.update();
        game.updateState(2);
        game.end();
      
    }
        for(var a = 3;a<14;a++){
            walls[a].destroy();
        }
        for(var a = 16;a<29;a++){
            walls[a].destroy();
        }
        if(ref===false){
            walls.push(wall31);
            walls.push(wall32);
            for(var i=0;i<zombies.length;i++){
               healths[i] = 0;
            }
           
            ref = true;
        }
        for(var a=0;a<walls.length;a++){
            monster.bounceOff(walls[a]);
        }
        if(player.index===1){
            for(var a=0;a<bullets1.length;a++){
                if(bullets1[a].isTouching(monster)){
                    player.monsterH -= 100;
                    bullets1[a].destroy();
                }
            }
        }
        if(player.index===2){
            for(var a=0;a<bullets2.length;a++){
                if(bullets2[a].isTouching(monster)){
                    player.monsterH -= 100;
                    player.update();
                    bullets2[a].destroy();
                }
            }
        }
       if(player.monsterH === 0){
           monster.destroy();
           wall31.destroy();
           wall32.destroy();
       }
    }
for(var i=0;i<healths.length;i++){
    if(zombies[i].y<-50){
        healths[i] = 0;
    }
        
    
}
}
if(gameState===2){
    game.end();
}
}
function shoot(){
    if(player.index===1){
        bullet = createSprite(player1.x,player1.y);
        bullet.addImage("bullet",bullet_img);
        bullet.scale = 0.2;
        bullet.lifetime = 300;
        if(direction === "right"){
            player1.rotation = 90;
            bullet.rotation = 180;
            bullet.velocityX = 15;
            bullet.velocityY = 0;
        }
        if(direction === "left"){
            player1.rotation = 270;
            bullet.rotation = 0;
            bullet.velocityX = -15;
            bullet.velocityY = 0;
        }
        if(direction === "up"){
            player1.rotation = 0;
            bullet.rotation = 90;
            bullet.velocityX = 0;
            bullet.velocityY = -15;
        }
        if(direction === "down"){
            player1.rotation = 180;
            bullet.rotation = 270;
            bullet.velocityX = 0;
            bullet.velocityY = 15;
        }
        bullets1.push(bullet);
        
    }
    if(player.index===2){
        bullet = createSprite(player2.x,player2.y);
        bullet.addImage("bullet",bullet_img);
        bullet.scale = 0.2;
        bullet.lifetime = 300;
        if(direction === "right"){
            player2.rotation = 90;
            bullet.rotation = 180;
            bullet.velocityX = 15;
            bullet.velocityY = 0;
        }
        if(direction === "left"){
            player2.rotation = 270;
            bullet.rotation = 0;
            bullet.velocityX = -15;
            bullet.velocityY = 0;
        }
        if(direction === "up"){
            player2.rotation = 0;
            bullet.rotation = 90;
            bullet.velocityX = 0;
            bullet.velocityY = -15;
        }
        if(direction === "down"){
            player2.rotation = 180;
            bullet.rotation = 270;
            bullet.velocityX = 0;
            bullet.velocityY = 15;
        }
        bullets2.push(bullet);
        
    }
}
