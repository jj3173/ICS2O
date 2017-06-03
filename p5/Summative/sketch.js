/* Summative Game
Jieru 
Last Edited: 2017-06-01
*/

//variables used for this game
var status = 0;
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
var speedX = 4; 
//the score the player obtains, recorded by how long they last before getting hit by the opponent
var score = 0;

//load the background music for the game
//function preload() {
	//mySound = loadSound ("MarioMusic.mp3");
//}

function setup() {
	//the size of the game screen
	createCanvas(965,400);
	//play the background music for the game
	//mySound.setVolume(0.1);
	//mySound.play();
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
	if(status==0){
	//start button
	textSize(100);
	text("START", 325, 200); 
	}
	else {
		//size of the score
		textSize(30);
		//display scores
		text(score, 20, 30);
		//position and size of the Bullet
		image(opponent, opX, opY, opponent.width/30, opponent.height/30);
		//speed the Bullet is moving
		opX = opX - speedX;
		if(opX >= -100) {
		score = score + 1;
		}
	}	
	//check for collision
  	//if((abs(posX - opX) <30) && (abs(posY-opY)<30)) {
	//size of words
	//textSize(30);
	//display 
	//text(GAME OVER, 20, 30);
	//}
	//if the Bullet leaves the screen, go back to the right side of the screen and re-fire at a random location between 0 and 400
	if(opX<=-100) {
	//return to right side of screeen
	opX = 965
	//Y location of Bullet random but between 0 and 400
	opY = random(0, 400);
	//change the speed of Bullet randomly between 2 and 10
	speedX = random(2, 10);
	}
	//re-create the image
	image(opponent, opX, opY, opponent.width/30, opponent.height/30);	
}

function mouseClicked() {
	 if ((mouseX < 965) && (mouseY < 400) { //if the mouse is clicked, the game begins
	 status = 1;	
	 }
}

//control for the player using the keypad
function keyPressed() {
	//if the right arrow is pressed, Mario will move to the right
	if (keyCode == RIGHT_ARROW) {
		posX += 8;
	}
	//if the left arrow is pressed, Mario will move to the left
	else if (keyCode == LEFT_ARROW) {
		posX -= 8;
	}
	//if the up arrow is pressed, Mario will move up
	else if (keyCode == UP_ARROW) {
		posY -= 8;
	}
	//if the down arrow is pressed, Mario will move down
	else if (keyCode == DOWN_ARROW) {
		posY += 8;
	}
}
