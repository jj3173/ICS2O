/* Summative Game
Jieru 
Last Edited: 2017-06-09
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
//position of the Bullet at the start of the game
var bullet;
var opX = 965;
var opY = 100;
//postion of the Fireball that comes into play after the player reaches 500 on the score
var fireball;
var fireX = 1000;
var fireY = 100;
//the speed the Bullet is moving at
var speedX = 6; 
//the score the player obtains, recorded by how many opponents he dodges
var score = 0;
//sound
var mySound;
//game over music
var death;
//game title page
var title;
//game over display
var gameOver;
//bonus Mario can get
var donut;
//position of the donut
var donutX = 500;
var donutY = 100;

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
	//Bullet
	bullet = loadImage ("Bullet.png");
	//Fireball
	fireball = loadImage ("Fireball.png");
	//game name 
	title = loadImage ("TitleGame.png");
	//game over
	gameOver = loadImage ("GameOver.png");
	//donut image - bonus to player's score
	donut = loadImage ("Donut.png");
}

function draw() {
	//if the music ends, restart
	if ((mySound.isPlaying() == false) && (userStop == false)) {  
    	mySound.play();
 	}
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
		image(bullet, opX, opY, bullet.width/30, bullet.height/30);
		//speed the Bullet is moving
		opX = opX - speedX;
		//bonus for the player's score
		image(donut, donutX, donutY, donut.width/6, donut.height/6);
	}	
	//if the Bullet leaves the screen, go back to the right side of the screen and re-fire at a random location between 0 and 400
	if(opX<=-100) {
		//return to right side of screeen
		opX = 965
		//Y location of Bullet random but between 0 and 370
		opY = random(0, 370);
		//change the speed of Bullet randomly between 2 and 10
		speedX = random(4, 12);
		//if the Bullet goes off the screen, a point will be added
		score = score + 1;
	}
	
	//if the player reaches a score of 10
	if(score >= 10) { 
		image(fireball, fireX, fireY, fireball.width/1.5, fireball.height/1.5);
	  	fireX = fireX - speedX;
		if(fireX<=-100) {
			//return to right side of screeen
			fireX = 965
			//Y location of Bullet random but between 0 and 370
			fireY = random(0, 370);
			//change the speed of Bullet randomly between 2 and 10
			speedX = random(4, 12);
			//if the Fireball goes off the screen, a point will be added
			score = score + 1;
		}
	} 
	
	//checking for collision between Bullet and Mario
	//if it hits, the game is over 
	if ((abs(posX-opX)<70) && (abs(posY-opY)<80)) {
		//picture displayed when the games over
		background(gameOver);
		//text size of the gameOver
		textSize(75);
		speedX = 0;	
		posX = opX;
		posY = opY;
		//displaying the score
		text("Your score is " + score + "!", 175, 225);
		//color white
		fill (255, 255, 255); 
		rect (770, 320, 150, 50);
		fill( 0, 0, 0);
		textSize (30);
		text ("Restart", 800, 365);
	}	
	//checking for collision between Fireball and Mario
	if ((abs(posX-fireX)<70) && (abs(posY-fireY)<80)) {
		//picture displayed when the games over
		background(gameOver);
		speedX = 0;	
		posX = fireX;
		posY = fireY;
		//displaying the score
		text("Your score is " + score + "!", 175, 225);
		//color white
		fill (255, 255, 255); 
		rect (770, 320, 150, 50);
		fill( 0, 0, 0);
		textSize (30);
		text ("Restart", 800, 365);
	}
	//checking for collision between Mario and the donut
	if ((abs(posX-donutX)<65) && (abs(posY-donutY)<90)) {
		//if Mario eats the donut, he will receive 2 bonus scores
		score = score + 2;
		//move the donut to a random spot between given numbers
		donutX = random(400, 925);
		donutY = random(50, 350);
	}
	//restart button
	if ((mouseIsPressed) && (mouseY < 400) && (mouseY > 200) && (mouseX > 500) && (mouseX <965)) {
		posX = 0;
		opX = 965;
		speedX = 4;
		score = 0;
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
		posX += 25;
	}
	//if the left arrow is pressed, Mario will move to the left
	else if (keyCode == LEFT_ARROW) {
		posX -= 25;
	}
	//if the up arrow is pressed, Mario will move up 
	else if (keyCode == UP_ARROW) {
		//when the up button is pressed he will jump
		posY -= 75;
	}
	//if the down arrow is pressed, Mario will move down
	else if (keyCode == DOWN_ARROW) {
		posY += 25;
	}
}
