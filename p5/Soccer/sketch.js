/* soccergame
Jieru
4/27/2017 */

//Global Variables also know as the how many he got (on the left) and how many balls he missed (right)
var scoreA = 6;
var scoreB = 9;

//position of the ball using variables
var posX = 0;
var posY = 0;
//size of the player (Bob)
faceSize = 30;
//speed variables to control speed of the ball
var speedX = 3; 
var speedY = 2;

function setup() {
  //canvas size
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('Soccer');
}

function draw() {
	//field
	background(86, 189, 72);
	fill(0, 0, 0);
	//size of the score
	textSize(30);
	//Question 2 display scores
	text(scoreA, 20, 30);
	text(scoreB, 600, 30);

	//court lines
	fill(255, 255, 255); //white
	ellipse(320, 240, 200, 200);
	rect(315, 20, 10, 450); 
	
	//net
	rect(0, 100, 10, 250); 
	rect(630, 100, 10, 250); 


	//soccer ball
	stroke(0, 0, 0);
	//ball is black in color
	fill(0, 0, 0);
	//size and position of the ball 
	ellipse (posX, posY, 20, 20);

	//the position of the ball 
	posX = posX + speedX;
	posY = posY + speedY;

	//check boundaries return to top left
	if(posX >= width) {
	  posX = 1;
	  posY = 1;
	speedX = 3;
	speedY = 2;
	scoreA = scoreA + 1 //score on the left - how many balls missed by Bob
	}	

	if (posY>= height) {
	  posX = 1;
	  posY = 1;
	speedX = 3;
	speedY = 2;
	}
	if (posX <= 0) {
	  speedX = -speedX;
	scoreB = scoreB+1 //score on the right - how many balls he kicked to the net
	}

	if (posY <= 0) {
	  speed = -speedY;
	}

	//mouse variables to access player
	if (mouseIsPressed) {
	  player();
	//checking for collisions between player and ball
	  if((abs(posX - mouseX) <30) && (abs(posY-mouseY)<30)) {
		speedX = -round(random(1,6));
		speedY = round(random(-4, 4));
		}
	}

}


function player () {
	//creating a function for drawing of the soccer player

        //head
	fill(255, 247, 0);
	
	ellipse(mouseX, mouseY, faceSize, faceSize);
	

	//eyes
	fill(0, 0, 0);
	
	ellipse(mouseX-faceSize/6, mouseY-faceSize/8, faceSize/4, faceSize/4);
	
	ellipse(mouseX+faceSize/6, mouseY-faceSize/8, faceSize/4, faceSize/4);

	
	//eye white
	fill(255,255,255);
	
	ellipse(mouseX-faceSize/6, mouseY-faceSize/8, faceSize/6, faceSize/6);
	
	ellipse(mouseX+faceSize/6, mouseY-faceSize/8, faceSize/6, faceSize/6);


	//mouth	
	fill (230, 0, 255);	
	
	ellipse(mouseX+faceSize/30, mouseY+faceSize/4, faceSize/2, faceSize/4);

	
	//body
	fill(34, 0, 255);
	rect(mouseX-faceSize/2, mouseY+faceSize/2, 30, 40);

	//legs
	fill(54, 207, 171);
	
	rect(mouseX-faceSize/3, mouseY+faceSize*1.8, faceSize/4, faceSize/2);
	
	rect(mouseX+faceSize/8, mouseY+faceSize*1.8, faceSize/4, faceSize/2);


	//arms
	rect(mouseX-faceSize, mouseY+faceSize, faceSize/2, faceSize/4);
	
	rect(mouseX+faceSize/2, mouseY+faceSize, faceSize/2, faceSize/4);

}
