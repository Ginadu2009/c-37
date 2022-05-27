class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0 
  }
  
getCount(){
  var playesCountR = database.ref("contagemJogador");
  playesCountR.on("value",data=>{
    contagemJogador = data.val()
  })
}

updateCount(c){
  database.ref("/").update({
  contagemJogador:c
  })

}

addPlayer(){
  var playerIndex = "players/player"+this.index
  if (this.index === 1) {
    this.positionX = width/2-100
  } else {
    this.positionX = width/2+100
    
  }

  database.ref(playerIndex).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY
  })

}

update(){
  var playerIndex = "players/player"+this.index
  database.ref(playerIndex).update({
    positionX:this.positionX,
    positionY:this.positionY
  })
}

getDistance(){
  var playerDisitR = database.ref("players/player"+this.index)
  playerDisitR.on("value",data=>{
    var data = data.val()
    this.positionX=data.positionX
    this.positionY=data.positionY
  })
}

}
