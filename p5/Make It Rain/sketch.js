/*Make It Rain
Jieru 
4/20/2017 */

//these are the global variables
var xPositions = [];

var yPositions = [];




function setup() {
 	createCanvas(400, 400);
	//randomly create raindrops on the canvas
	for(var rainNum = 0; rainNum<20; rainNum++) {
    
		xPositions.push(random(0,400));
    
		yPositions.push(random(0,400));
	}
}


function draw() {
	
	//this is the blue background 	   
	background(204, 247, 255);

 
   
	for (var i = 0; i < xPositions.length; i++) {
        
		noStroke();
        
		//this changes the color of the raindrops randomly
		fill(random(255), random(255), random(255));
        
		ellipse(xPositions[i], yPositions[i], 10, 10);
        
		yPositions[i] += 3;
 
		if(yPositions[i]>400) {
            
			yPositions[i]=0;
        
		}
  
      
	}

 
        
	 
 }


//when the mouse is pressed there will be more raindrops added    
    
function mousePressed() {
    
	xPositions.push(random(0,400));
    
	yPositions.push(random(0,400));
    
}
        

    



