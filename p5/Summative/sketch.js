var bg;
var gamePlayer;


function setup() {
	createCanvas(950,400);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Mario.png");
}




function draw() {
	background(bg);
	image(gamePlayer, 0, height/8, gamePlayer.width/8, gamePlayer.height/8);
}

