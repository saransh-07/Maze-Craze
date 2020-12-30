class Form{
    constructor(){
        this.title = createElement("h1");
        this.button = createButton("Play");
        this.input = createInput("Name");
        this.greeting = createElement("h1");
        this.reset = createButton("Reset");
        this.inst = createElement("h2");
        this.change = createButton("Change Player");
        this.code = createElement("h3");
        this.host = createButton("Host Game");
        this.submitCode = createButton("Submit");
        this.errorMessage = createElement("h3");
        this.wrongCode = createElement("h3");
        this.instructions = createElement("h2");
       // this.extraInput = createInput(code);
       // this.extraInput.hide();
              this.join = createButton("Join Game");
              this.joinInput = createInput("Code");
              this.retry = createButton("Retry");
         this.joinInput.hide();
         this.retry.hide();
        
         this.submitCode.hide();
     //    this.copy = createButton("Copy Code");
       //  this.copy.hide();
        option1 = createSprite(displayWidth/6,200,100,100);
        option1.addImage("person1",person1);
        option2 = createSprite(displayWidth/6+200,200,100,100);
        option2.addImage("person2",person2);
        option3 = createSprite(displayWidth/6+400,200,100,100);
        option3.addImage("person3",person3);
        option4 = createSprite(displayWidth/6+600,200,100,100);
        option4.addImage("person4",person4);
        option5 = createSprite(displayWidth/6+800,200,100,100);
        option5.addImage("person5",person5);
        option6 = createSprite(displayWidth/6+1000,200,100,100);
        option6.addImage("person6",person6);

    }
    hide(){
      this.title.hide();
      this.button.hide();
      this.greeting.hide();
      this.input.hide();
      this.inst.hide();
      this.host.hide();
      this.join.hide();
    // this.copy.hide();
      this.code.hide();
      this.change.hide();
      this.instructions.hide();
      option1.destroy();
      option2.destroy();
      option3.destroy();
      option4.destroy();   
      option5.destroy();
      option6.destroy();
}
    display(){
        background(bg); 
        
        
       
            this.title.html("Get the Crown");
            this.title.position(displayWidth/2-50,25);
            this.title.style("color","green");
            this.instructions.html("Rules : Complete the form, do not miss out any field.Press z to aim and x to be able to walk again. It displays your aim direction as well as score.Use the repective arrow keys or a(left), d(right), w(up) and s(down) to move and aim.Press space to shoot.Also remember that a zombie takes two hits to die.You need to score at least 25 or 50 to pass one of the doors and correctly answer the four riddles.")
            this.instructions.position(100,displayHeight-300);
            this.input.position(displayWidth/2-50 ,displayHeight/2+100);
            this.input.style("background","skyblue");
            this.button.position(displayWidth/2 ,displayHeight/2+100 + 50);
            this.button.style("background","blue");   
            this.button.style("width","60px");
            this.button.style("height","20px");
            this.reset.position(displayWidth - 100,50); 
            this.inst.html("Choose your player or you'll probably end up in a box");
            this.inst.position(displayWidth/2 - 200,75);
            this.inst.style("color","red");
            this.change.position(displayWidth/2,displayHeight/2 - 150);
            this.change.style("background", "lightpink");
            this.host.style("background","violet");
            this.join.style("background","violet");
            this.host.position(displayWidth/2,displayHeight/2-100);
            this.join.position(displayWidth/2,displayHeight/2-50);
            this.joinInput.style("background","lightgreen");
            this.submitCode.style("background","violet");
          
            this.retry.mousePressed(()=>{
                this.retry.hide();
                this.wrongCode.hide();
                this.submitCode.show();
                this.joinInput.show();
            })
           
            this.host.mousePressed(()=>{
                this.join.hide();
                this.host.hide();
                this.submitCode.hide();
                this.joinInput.hide();
                verify = true;

                this.code.html("Share the code with your friend:"+code);
                this.code.position(displayWidth/2 - 100,displayHeight/2-100);
                
                
                game.updateCode(code);
            })

           

            this.join.mousePressed(()=>{
                game.getCode();
                this.host.hide();
                this.join.hide();
                this.joinInput.position(displayWidth/2-100,displayHeight/2-100);
                this.submitCode.position(displayWidth/2+67,displayHeight/2-100);
                this.joinInput.show();
               
                this.submitCode.show();
            })
           this.submitCode.mousePressed(()=>{
               this.submitCode.hide();
               this.joinInput.hide();
               this.host.hide();
               var inputRef = this.joinInput.value();
               if(gameCode === inputRef){
                  verify = true;
                  
                  
               }else if(gameCode!== inputRef){
                  this.wrongCode.html("Code is incorrect or no game is created."); 
                  this.wrongCode.position(displayWidth/6,displayHeight/2 + 50);
                  this.retry.position(displayWidth/6,displayHeight/2 + 100);
                  this.retry.show();
                  this.wrongCode.show();
                  this.retry.show();
               }
           })

           
            
           
            this.button.mousePressed(()=>{
             if(verify === true){
                this.button.hide();
                this.input.hide();
                this.errorMessage.hide();
                this.wrongCode.hide();
                player.name = this.input.value(); 
                          
                playerCount+=1;
                player.index = playerCount;
                
                if(player.index===1){
                    player.y = 150;
                }
                if(player.index===2){
                    player.y = 2250;
                }
                player.update();
                player.updateCount(playerCount);
                playRef = "Players Found : "+playerCount+"/2";
                this.greeting.html("Hello "+player.name+"!!!");
                this.greeting.position(displayWidth/2,displayHeight/4);
             } else if(verify===false){
                 this.errorMessage.html("Please press either  host game option before playing or join an existing game.");
                 this.errorMessage.position(displayWidth/2-50,displayHeight/2+150)
             }
               
              
            })
            this.reset.mousePressed(()=>{
                player.updateCount(0);
                game.updateState(0);
                game.updatePhase(0);
                bg_music.pause();
                game.getState();
                game.start();
           })
           this.change.mousePressed(()=>{
                selState = 0;
                option1.scale = 1;
                option2.scale = 1;
                option3.scale = 1;
                option4.scale = 1;
                option5.scale = 1;
                option6.scale = 1;
           })
            drawSprites();
    }   
}