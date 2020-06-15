class Hurdle {
    constructor(){
        this.Hurdle = createGroup()
    }
    display(){
        for (var i = -displayHeight*5 + 100; i < displayHeight+100; i+=200){
            var hdurdle = createSprite(displayWidth/2, i, displayWidth, 10)
            this.Hurdle.add(hdurdle);
        
        
        }
        for (var j = 0; j != 4; j++){ 
        if (this.Hurdle.isTouching(p[j])){
            if (!keyIsDown(32)){
                gameState = 2;
                player.rank = -1;
                Player.updateNoOfPeople(player.rank);
                var playerIndex = "players/player" + player.index;
                database.ref(playerIndex).update({
                rank: player.rank
                })
                console.error("Disqualified")
            }
        }
        }
    }
}