/* Summative Game
Jieru 
Last Edited: 2017-05-30
*/

//variables used for this game
//background of the game
var bg;
//mario
var gamePlayer;
//mario's position on the screen at the start
var posX = 0;
var posY = 0;
//position of the opponents at the start of the game
var opX = 965;
var opY = 100;
//the speed the opponent is moving at
var speedX = 3; 
//the score the player obtains, recorded by how long they last before getting hit by the opponent
var score = 0;

function setup() {
	//the size of the game screen
	createCanvas(965,400);
	//loading images needed for this game
	//background
	bg = loadImage("grass.png");
	//player - Mario
	gamePlayer = loadImage("Mario.png");
	//opponent - bullet
	opponent = loadImage ("Bullet.png");
}

function draw() {
	//grass and sky background of the game
	background(bg);
	//position and size of Mario
	image(gamePlayer, posX, posY, gamePlayer.width/12, gamePlayer.height/12);
	//size of the score
	textSize(30);
	//display scores
	text(score, 20, 30);
	//position and size of the Bullet
	image(opponent, opX, opY, opponent.width/30, opponent.height/30);
	//speed the Bullet is moving
	opX = opX - speedX;
	if(posX <= 0) {
	score = score + 1;
	}
	if(opX<=-10) {
	opX = 965
	}
	image(opponent, opX, opY, opponent.width/30, opponent.height/30);
	
}

//control for the player using the keypad
function keyPressed() {
	//if the right arrow is pressed, Mario will move to the right
	if (keyCode == RIGHT_ARROW) {
		posX += 6;
	}
	//if the left arrow is pressed, Mario will move to the left
	else if (keyCode == LEFT_ARROW) {
		posX -= 6;
	}
	//if the up arrow is pressed, Mario will move up
	else if (keyCode == UP_ARROW) {
		posY -= 6;
	}
	//if the down arrow is pressed, Mario will move down
	else if (keyCode == DOWN_ARROW) {
		posY += 6;
	}
}
