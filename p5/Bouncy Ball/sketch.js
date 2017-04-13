var posX = 10;
var posY = 10;
var speedX = 3;
var speedY = 3;
var backColor;

function setup() {
  createCanvas(400, 400);
  backColor = color(0, 0, 0)
}


function draw() {
	background(backColor);
	ellipse(posX, posY, 20, 20);
	posX = posX + speedX;
	posY = posY + speedY;

		   if (posX > 390){
		     speedX = -speedX;
		     backColor = color(random(255), random(255), random(255));
		   }  

		   if (posY > 390){
		     speedY= -speedY;
		     backColor = color(random(255), random(255), random(255));
		   }

		   if (posX < 0){
		     speedX = -speedX;
		     backColor = color(random(255), random(255), random(255));
		   }

		  if(posY < 0) {
		    speedY = -speedY;
		    backColor = color(random(255), random(255), random(255));
		   }
}