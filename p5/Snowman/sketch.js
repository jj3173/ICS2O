function setup() {
  createCanvas(400, 400);
}

function draw() {
background (188, 228, 235);

// The ground
fill (90, 209, 128);
rect(0, 300, 400, 100);  

// The sun
fill (245, 221, 103);
ellipse(80, 64, 100, 100);  

// The snowman
fill (255, 255, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);

// Arms
stroke(0);
strokeWeight (2);
line (70, 150, 150, 200);
line (330, 150, 250, 200);

//Eyes
fill (0, 0, 0);
ellipse (180, 115, 6, 6);
ellipse (220, 115, 6, 6);

//Buttons
noStroke();
fill (86, 24, 143);
ellipse (200, 180, 10, 10);
ellipse (200, 200, 10, 10);
ellipse (200, 220, 10, 10);

//Nose
fill(255, 111, 0);
triangle(135, 131, 200, 122, 200, 136);


}