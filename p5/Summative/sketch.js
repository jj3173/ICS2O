var bg;
var gamePlayer;


function setup() {
	createCanvas(950,400);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Mario.png");
}

function draw() {
	background(bg);
	image(gamePlayer, 0, height/4, gamePlayer.width/12, gamePlayer.height/12);
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		posX += 6;
	}
	else if (keyCode == LEFT_ARROW) {
		posX -= 6;
	}
	else if (keyCode == UP_ARROW) {
		posY -= 6;
	}
	else if (keyCode == DOWN_ARROW) {
		posY += 6;
	}
}

