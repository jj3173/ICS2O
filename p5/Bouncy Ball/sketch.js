/* Bouncy Ball Assignment
Jieru
2017-04-20 */

//I'm going to make a bouncy ball bouce from two sides of the wall


//these are my global varaibles 
var posX = 10;
var posY = 10;
var speedX = 3;
var speedY = 3;
//this variable is explained in the function setup
var backColor;

function setup() {
  createCanvas(400, 400);
  backColor = color(0, 0, 0)
}


function draw() {
	background(backColor);
	//the ball
	ellipse(posX, posY, 20, 20);
	//position of the ball
	posX = posX + speedX;
	posY = posY + speedY;

		//the border of the frame
		   if (posX > 390){
		     speedX = -speedX + 1;
			   //changes color when it hits the border
		     backColor = color(random(255), random(255), random(255));
		   }  

		//the border of the frame
		   if (posY > 390){
		     speedY= -speedY - 1;
		     backColor = color(random(255), random(255), random(255));
		   }
	
		//the border of the frame
		   if (posX < 10){
		     speedX = -speedX;
		     backColor = color(random(255), random(255), random(255));
		   }
	
		//the border of the frame
		  if(posY < 10) {
		    speedY = -speedY;
		    backColor = color(random(255), random(255), random(255));
		   }
}
