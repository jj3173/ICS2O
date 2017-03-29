/* House
Jieru 
3/20/2017
*/

function setup() {
  createCanvas(400, 400);
}

function draw(){

	background(195, 237, 250);

	var posX = 300;
	var posY =334;
	var sizeEllipse =100;

	//sun
	noStroke();
	fill(247, 210, 24);
	ellipse(55,50,90,90);

	// right cloud
	fill(255, 255, 255);
	ellipse(posX, posY-250, sizeEllipse+10, sizeEllipse);
	ellipse(posX+70, posY-250, sizeEllipse-30, sizeEllipse-40);
	ellipse(posX-70, posY-250, sizeEllipse-30, sizeEllipse-40);


	//grass
	fill(137, 235, 132);
	rect(0,300,400,100);

	//path
	noStroke();
	fill(148, 143, 143);
	rect(172, 323, 66, 115);

	//wall
	fill(250, 163, 180);
	rect(60, 180, 280, 155);

	//chimney
	fill(102, 71, 45);
	rect(99, 80, 33, 77);

	//roof
	fill(115, 84, 52);
	triangle(200, 50, 350, 190, 50, 190);

	//door
	fill(51, 40, 23);
	rect(172, 260, 65, 76);

	//doorknob
	fill(153, 147, 147);
	ellipse(225,300,15,15);

	//window
	fill(226, 235, 235);
	rect(80, 205, 70, 60);
	rect(255, 205, 70, 60);
	stroke(97, 70, 49);
	strokeWeight(5);
	line(147,235,83, 235);
	line(322,235,257, 235);
	line(115, 262, 115, 207);
	line(290, 262, 290, 207);

	// bush
	noStroke();
	var length = 50;
	fill(32, 61, 29);
	ellipse(posX, posY, sizeEllipse-30, sizeEllipse-40);
	ellipse(posX+40, posY, sizeEllipse/2, sizeEllipse/2);
	ellipse(posX-40, posY, sizeEllipse/2, sizeEllipse/2);
	ellipse(posX-200, posY, sizeEllipse-30, sizeEllipse-40);
	ellipse(posX-240, posY, sizeEllipse/2, sizeEllipse/2);
	ellipse(posX-160, posY, sizeEllipse/2, sizeEllipse/2);
}
