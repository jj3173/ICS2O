var posX = 10;
var posY = 10;
var speedX = 3;
var speedY = 3;
var faceSize = 30;
var backColor;

function setup() {
  createCanvas(400, 400);
  backColor = color(0, 0, 0);
}


function draw() {
	background(backColor);
	//clown
        fill(255, 247, 0);
	ellipse(posX, posY, faceSize, faceSize);

	//eyes	
	fill(0, 0, 0);
	ellipse(posX-faceSize/6, posY-faceSize/8, faceSize/4, faceSize/4);
	
	ellipse(posX+faceSize/6, posY-faceSize/8, faceSize/4, faceSize/4);

	//eyeballs
	fill(255,255,255);
	
	ellipse(posX-faceSize/6, posY-faceSize/8, faceSize/6, faceSize/6);
	
	ellipse(posX+faceSize/6, posY-faceSize/8, faceSize/6, faceSize/6);
	//nose
    	fill(255, 0, 0);
	
	ellipse(posX-faceSize/60, posY, faceSize/3, faceSize/3);
	//mouth
	fill (230, 0, 255);	
	ellipse(posX+faceSize/30, posY+faceSize/4, faceSize/2, faceSize/4);
	posX = posX + speedX;
	posY = posY + speedY;

		   if (posX > 390){
		     speedX = -speedX;
		     backColor = color(random(255), random(255), random(255));
		   }  

		   if (posY > 390){
		     speedY= -speedY - 1;
		     backColor = color(random(255), random(255), random(255));
		   }

		   if (posX < 10){
		     speedX = -speedX+  1;
		     backColor = color(random(255), random(255), random(255));
		   }

		  if(posY < 10) {
		    speedY = -speedY;
		    backColor = color(random(255), random(255), random(255));
		   }
}
