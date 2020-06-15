var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var noofpeople;
var form, player, game, hurdle;

var p, p1, p2, p3, p4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../track.jpg");
  car1_img = loadImage("../head1.png");
  car2_img = loadImage("../head2.png");
  car3_img = loadImage("../head3.png");
  car4_img = loadImage("../head4.png");
  ground = loadImage("../ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  // //if (gameState === 0) {
  // //  form.show()
  // //}
}
