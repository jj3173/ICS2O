/* House
Jieru 
3/20/2017
*/

function setup() {
  createCanvas(400, 400);
}

function draw(){

	background(195, 237, 250);

	var posX = 30;
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

	//roof
	fill(115, 84, 52);
	triangle(posX-houseSize/10, posY+houseSize/10, posX+houseSize/2, posY-houseSize*0.5, posX+houseSize*1.1, posY+houseSize/10);

	//window
	fill(94, 167, 209);
	rect(posX+houseSize/10, posY+houseSize/6, houseSize/4, houseSize/4);
	rect(posX+houseSize/1.5, posY+houseSize/6, houseSize/4, houseSize/4);


	//House #2 
	//wall
	fill(250, 163, 180);
	rect(posX+houseSize*1.5, posY-houseSize, houseSize*2, houseSize*2);

	//door
	fill(51, 40, 23);
	rect(posX+houseSize*2.2, posY-houseSize/80, houseSize/1.5, houseSize);

	//roof
	fill(115, 84, 52);
	triangle(posX+houseSize*2.5, posY/4, posX+houseSize*1.3, posY/1.4, posX+houseSize*3.7, posY/1.4);

	//window
	fill(94, 167, 209);
	rect(posX+houseSize*1.6, posY-houseSize/1.5, houseSize/1.75, houseSize/1.75);
	rect(posX+houseSize*2.8, posY-houseSize/1.5, houseSize/1.75, houseSize/1.75);


}
