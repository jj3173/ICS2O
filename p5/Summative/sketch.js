var bg;
var gamePlayer;


function setup() {
	createCanvas(950,400);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Mario.png");
}




function draw() {
	background(bg);
	image(gamePlayer, 0, height/12, gamePlayer.width/12, gamePlayer.height/12);
}

