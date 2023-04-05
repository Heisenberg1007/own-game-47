class Game {
    constructor() {
        this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
    }

    handleElements() {
        form.hide();
        this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
       
      }
    
      

      play() {
        this.handleElements();
    
        Player.getPlayersInfo();
    
        if (allPlayers !== undefined) {
        //  image(track, 0, -height * 5, width, height * 6);
        

        var index = 0;
      text("Welcome to the Game",width/2+150,220)
      push()
      textSize(30)
      noStroke()
      text("Player 1 plays first : "+allPlayers["player1"].name+" - symbol-X",width/2+180,280)
      //text("Note- if you click twice ")

      pop()

      window.addEventListener("click",()=>{
        var textx=0,texty=0
        if (mouseY < 250 && mouseX < 250 && mouseY > 150 && mouseX > 150) {
          currentColor = "black";
          textx = 200;
          texty = 200;
        } else if (mouseX < 350 && mouseY < 250) {
          currentColor = "black";
          textx = 300;
          texty = 200;
        } else if (mouseX < 450 && mouseY < 250) {
          currentColor = "black";
          textx = 400;
          texty = 200;
        } else if (mouseX < 250 && mouseY < 350) {
          currentColor = "white";
          textx = 200;
          texty = 300;
        } else if (mouseX < 350 && mouseY < 350) {
          currentColor = "white";
          textx = 300;
          texty = 300;
        } else if (mouseX < 450 && mouseY < 350) {
          currentColor = "white";
          textx = 400;
          texty = 300;
        } else if (mouseX < 250 && mouseY < 450) {
          currentColor = "white";
          textx = 200;
          texty = 400;
        } else if (mouseX < 350 && mouseY < 450) {
          currentColor = "white";
          textx = 300;
          texty = 400;
        } else if (mouseX < 450 && mouseY < 450) {
          currentColor = "white";
          textx = 400;
          texty = 400;
        }
      
        if (turn % 2 == 0) {
          text(allPlayers["player2"].symbol, textx, texty);
          console.log("player1")
        } else {
          text(allPlayers["player1"].symbol, textx, texty);
        }
      
        turn = turn + 1;
     
      })
      drawSprites();
    }
    }

    handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {},
            
          });
          window.location.reload();
        });
      }

     /* check(index){
        if(index===1){
            if(player.click===true){
                handleClicked()
            }
            !player.click;

        }
        if(index===2){
            if(player.click===false){
                handleClicked()
            }
            !player.click;
            
        }
      }
    handleClicked(){

    }*/



}