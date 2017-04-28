/* Keyboard
Jieru Yang
2017/04/19 */

// Position and size variables for the person
var posX = 0;
var posY = 0;
faceSize = 30;


function setup() {
  //size of the canvas
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('UseKeys');  
}

function draw() {
	// pink background
	background(201, 143, 201); 

        //head
	fill(255, 247, 0);
	
	ellipse(posX, posY, faceSize, faceSize);
	

	//eyes
	fill(0, 0, 0);
	
	ellipse(posX-faceSize/6, posY-faceSize/8, faceSize/4, faceSize/4);
	
	ellipse(posX+faceSize/6, posY-faceSize/8, faceSize/4, faceSize/4);

	
	//eye white
	fill(255,255,255);
	
	ellipse(posX-faceSize/6, posY-faceSize/8, faceSize/6, faceSize/6);
	
	ellipse(posX+faceSize/6, posY-faceSize/8, faceSize/6, faceSize/6);


	//mouth	
	fill (230, 0, 255);	
	
	ellipse(posX+faceSize/30, posY+faceSize/4, faceSize/2, faceSize/4);

	
	//body
	fill(34, 0, 255);
	rect(posX-faceSize/2, posY+faceSize/2, 30, 40);

	//legs
	fill(54, 207, 171);
	
	rect(posX-faceSize/3, posY+faceSize*1.8, faceSize/4, faceSize/2);
	
	rect(posX+faceSize/8, posY+faceSize*1.8, faceSize/4, faceSize/2);


	//arms
	rect(posX-faceSize, posY+faceSize, faceSize/2, faceSize/4);
	
	rect(posX+faceSize/2, posY+faceSize, faceSize/2, faceSize/4);
  
}

//moving the person
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
