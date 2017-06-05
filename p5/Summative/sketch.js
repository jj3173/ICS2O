/* Summative Game
Jieru 
Last Edited: 2017-06-03
*/

//variables used for this game
var status = 0;
//background of the game
var bg;
//mario
var gamePlayer;
//mario's position on the screen at the start
var posX = 0;
var posY = 150;
//position of the opponents at the start of the game
var opX = 965;
var opY = 100;
//the speed the opponent is moving at
var speedX = 4; 
//the score the player obtains, recorded by how long they last before getting hit by the opponent
var score = 0;
//sound
var mySound;

//load the background music for the game
function preload() {
	mySound = loadSound ('MarioMusic.mp3');
	//https://downloads.khinsider.com/mario
}

function setup() {
	//the size of the game screen
	createCanvas(965,400);
	//play the background music for the game
	mySound.setVolume(0.1);
	mySound.play();
	//loading images needed for this game
	//background
	bg = loadImage("grass.png");
	//player - Mario
	gamePlayer = loadImage("Mario.png");
	//opponent - bullet
	opponent = loadImage ("Bullet.png");
	//game name 
	title = loadImage ("TitleGame.png");
	//game over
	gameOver = loadImage ("GameOver.png");
}

function draw() {
	//grass and sky background of the game
	background(bg);
	//position and size of Mario
	image(gamePlayer, posX, posY, gamePlayer.width/12, gamePlayer.height/12);
	//if the mouse isn't clicked ...
	if(status==0){
		//position and size of the title
		image(title, 200, 50, title.width*2, title.height*2);
		//start button
		textSize(75);
		text("START", 325, 350); 
	}
	//if the mouse is clicked ...
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
	//if the Bullet leaves the screen, go back to the right side of the screen and re-fire at a random location between 0 and 400
	if(opX<=-100) {
		//return to right side of screeen
		opX = 965
		//Y location of Bullet random but between 0 and 380
		opY = random(0, 380);
		//change the speed of Bullet randomly between 2 and 10
		speedX = random(2, 10);
	}
	//re-create the image
	image(opponent, opX, opY, opponent.width/30, opponent.height/30);
	
	//collision 
	if ((abs(posX-opX)<20) && (abs(posY-opY)<20)) {
		image(gameOver, 0, 0, gameOver.width/1.55, gameOver.height/1.8);
	}	
}

//controls the mouse
function mouseClicked() {
	 //if the mouse clicks anywhere on the screen, the game will begin
	 if ((mouseX < 965) && (mouseY < 400)) { 
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
