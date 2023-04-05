var canvas;
var backgroundImage, track;
var database, gameState;
var form, player, playerCount;
var allPlayers
var currentColor,turn
function preload(){
    bgImg=loadImage("bgImg.png")
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight)

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
    background(bgImg)
    
    fill("#008000")
    rect(0,0,width,90)

    textAlign(CENTER)
    fill("black")
    //fontWeight="bold"
    stroke("black")
    strokeWeight(2)
    textSize(50)
    text("Tic Tac Toe",width/2,60)


}




function draw(){

    if (playerCount === 2) {
        game.update(1);
      }
    
      if (gameState === 1) {
        game.play();
        createRow(150) 
        createRow(250)
        createRow(350)
     
      }


   
  
}

function createRow(n){
    for(var i=150 ; i<450 ; i+=100){
        box1=new Box(i,n,100,100)
        box1.display()
    }


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



