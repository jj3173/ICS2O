var bg;
var gamePlayer;


function setup() {
	createCanvas(963,350);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Luigi.png");
}




function draw() {
	background(bg);
	image(gamePlayer, 0, height/2, gamePlayer.width/2, gamePlayer.height/2);
}

