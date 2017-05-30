var bg;
var gamePlayer;
var posX = 0;
var posY = 0;
var score = 0;

function setup() {
	createCanvas(965,400);
	bg = loadImage("grass.png");
	gamePlayer = loadImage("Mario.png");
}

function draw() {
	background(bg);
	image(gamePlayer, posX, posY, gamePlayer.width/12, gamePlayer.height/12);
	//size of the score
	textSize(30);
	//Question 2 display scores
	text(score, 20, 950);
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

