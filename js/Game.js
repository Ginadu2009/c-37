class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
    carro1 = createSprite (width/2-50,height-100);
    carro1.addImage(carro1Img);

    carro2 = createSprite (width/2+100, height-100);
    carro2.addImage(carro2Img);

    carros = [carro1, carro2]
  }

  getState(){
    var gameStateR = database.ref("estadoJogo");
    gameStateR.on("value",function(data){
      estadoJogo = data.val()
    })
  }

  play(){
    this.mudanca()
    Player.getPlayerInf()
    if(allPlayers!== undefined){
      image(pista,0,-height*5,width,height*6);
      var index = 0;
      for(var playerS in allPlayers){
        index +=1
        var x = allPlayers[playerS].positionX
        var y = height- allPlayers[playerS].positionY
        carros[index-1].position.x = x
        carros[index-1].position.y = y
        if(index === player.index){
          stroke(10)
          fill("white")
          ellipse(x,y,60,60)
        }
      }
      this.playerControls()
      drawSprites;
    }
  
  }

  playerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY = player.positionY+10
      player.update()
    }
  }

}
