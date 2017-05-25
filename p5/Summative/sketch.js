var bg;
var gamePlayer;


function setup() {
	createCanvas(963,350);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Luigi.png");
}




function draw() {
	background(bg);
	image(gamePlayer, 0, height/4, gamePlayer.width/4, gamePlayer.height/4);
}

