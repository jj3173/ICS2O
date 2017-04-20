/* House
Jieru 
3/20/2017
*/

function setup() {
  createCanvas(400, 400);
}

function draw(){
	//background sky
	background(195, 237, 250);
	
	//variables
	var posX = 20;
	var posY =280;
	var houseSize =100;

	//sun
	fill(245, 234, 150);
	ellipse(posX*2,posY/5, houseSize, houseSize);

	//grass
	fill(167, 245, 157);
	rect(posX*0,posY+houseSize/1.5, houseSize*4, houseSize/1.5);

	//House #1 
	//wall
	fill(250, 163, 180);
	rect(posX, posY, houseSize, houseSize);

	//door
	fill(51, 40, 23);
	rect(posX+houseSize/3, posY+houseSize/2, houseSize/3, houseSize/2);

	//chimney
	rect(posX+houseSize/1.5, posY-houseSize/2, houseSize/5, houseSize/2);

	//roof
	fill(115, 84, 52);
	triangle(posX-houseSize/10, posY+houseSize/10, posX+houseSize/2, posY-houseSize*0.5, posX+houseSize*1.1, posY+houseSize/10);

	//window
	fill(94, 167, 209);
	rect(posX+houseSize/10, posY+houseSize/6, houseSize/4, houseSize/4);
	rect(posX+houseSize/1.5, posY+houseSize/6, houseSize/4, houseSize/4);
	fill(255, 255, 255);
	rect(posX+houseSize/7, posY+houseSize/5, houseSize/6, houseSize/6);
	rect(posX+houseSize/1.4, posY+houseSize/5, houseSize/6, houseSize/6);

	//doorknob
	fill(189, 118, 237);
	ellipse(posX+houseSize/2.5, posY+houseSize/1.25, houseSize/10, houseSize/10);


	//House #2 
	var posX = 148;
	var posY =155;
	var houseSize =227;

	//wall
	fill(250, 163, 180);
	rect(posX, posY, houseSize, houseSize);

	//door
	fill(51, 40, 23);
	rect(posX+houseSize/3, posY+houseSize/2, houseSize/3, houseSize/2);

	//chimney
	rect(posX+houseSize/1.5, posY-houseSize/2, houseSize/5, houseSize/2);

	//roof
	fill(115, 84, 52);
	triangle(posX-houseSize/10, posY+houseSize/10, posX+houseSize/2, posY-houseSize*0.5, posX+houseSize*1.1, posY+houseSize/10);

	//window
	fill(94, 167, 209);
	rect(posX+houseSize/10, posY+houseSize/6, houseSize/4, houseSize/4);
	rect(posX+houseSize/1.5, posY+houseSize/6, houseSize/4, houseSize/4);
	fill(255, 255, 255);
	rect(posX+houseSize/7, posY+houseSize/5, houseSize/6, houseSize/6);
	rect(posX+houseSize/1.4, posY+houseSize/5, houseSize/6, houseSize/6);

	//doorknob
	fill(189, 118, 237);
	ellipse(posX+houseSize/2.5, posY+houseSize/1.25, houseSize/10, houseSize/10);



}
