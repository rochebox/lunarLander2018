// This is the javascript that runs the lunar lander

//alert("Happy Monday");

var game = document.getElementById("gameWindow");
var gameRect = game.getBoundingClientRect();
var gameHeight = Math.round(gameRect.bottom - gameRect.top);
var gameWidth = Math.round(gameRect.right - gameRect.left);

//alert("hi, the gameHeight = " + gameHeight);
//alert("hi, the gameWidth = " + gameWidth);


// do set up of all of the images
var moonImage = document.getElementById("moon");
moonImage.style.zIndex = "0";

// set up the lander
var landerImage = document.getElementById('lander');
landerImage.style.position = "absolute";
landerImage.style.zIndex = "1";
landerImage.style.display = "block";

// set up the target
var targetImage = document.getElementById('target');
targetImage.style.position = "absolute"
targetImage.style.zIndex = "0";
targetImage.style.display = "block";

//set up the flame (hide it!)
var flameImage =  document.getElementById('flame');
flameImage.style.position = "absolute"
flameImage.style.zIndex = "0";
flameImage.style.display = "none";

//set up the blow up image (hide it!!)
var blowUpImage = document.getElementById('blowup');
blowUpImage.style.position = "absolute"
blowUpImage.style.zIndex = "1";
blowUpImage.style.display = "none";

var targetX;
var targetY;
var targetWidth = 120;

var menu = document.getElementById('menuBarSidePanel');
var menuRect = menu.getBoundingClientRect();
var menuHeight = Math.round(menuRect.bottom - menuRect.top);
var menuWidth = Math.round(menuRect.right - menuRect.left);

// adding variables  -- we did this in class on Wednesday
var landerX = 0;
var landerY = 0;
var landerWidth = 110;  // this is 110 pixels
var landerDX = 0;
var landerDY = 0;
var crashed = false;
var moving = false;

// now add stuff for the flame
var flameX;
var flameY;

// and add a command to set up animation
var id  = setInterval(frame, 40);



function setTargetLocation()
{
	//Code to set the target
	targetY = gameHeight - 95;  //somewhere 95 pixels up from bottom...
	targetX = menuWidth + 10 + Math.round(Math.random() * (gameWidth - targetWidth - 20));


	targetImage.style.left = targetX + 'px';
	targetImage.style.top = targetY + 'px';

}





function frame() {

   //console.log("hi from frame");
   moveLander();
}

function moveLander()
{

	//we will put a lot of code here
	console.log("we are moving the lander...well not yet");
}


function setLanderLocation(){

    crashed = false;
	landerImage.style.display = "block";
	blowUpImage.style.display = "none";

    //Code to set the Lander...
	landerY = 0;
	landerX = menuWidth +30 + Math.round(gameWidth/2) - Math.round(landerWidth/2);
	landerImage.style.left = landerX + 'px';
	landerImage.style.top = landerY + 'px';
	setFlamePosition();

}


function setFlamePosition(){
	flameX = landerX + 40;
	flameY = landerY + 80;
	flameImage.style.top = flameY + 'px';
    flameImage.style.left = flameX + 'px';
}


function showFlame(){
   flameImage.style.display = "block";
}

function hideFlame(){
	flameImage.style.display = "none";
}


function resetAnimation(){
	//alert("doing a reset");
	landerDY = 0;
	landerDX = 0;
	setTargetLocation();
	setLanderLocation();
}


function startAnimation(){
	//alert("doing a start");
	moving = true;
	landerDY = 3;
	
}


function checkForTargetWin(){
	var didIWin = false;
    //do something to check

    if( Math.abs(landerX - targetX) < 30){  // look at x
    	if(((targetY + 5) - (landerY + 80)) < 20){  //look at y
    		if(Math.abs(landerDY) < 6){  // look at speed...
    			didIWin = true;
    		}
    	}
    }
    return didIWin;
}



function doTheWinAlert(){
	alert("Hey you won -- nice landing!");
}


function moveLander(){
	//move 

	if(moving === true){

		if(checkForTargetWin() === false){
			landerX += landerDX;
			
			landerY += landerDY;
			//added to accerlerate the descent
			landerDY += 1;

			//Check X location

			
			if( landerX <= menuWidth + 40  && landerDX < 0){

				console.log( "landerX is: " + landerX  + ". menuWidth is " + menuWidth );
				landerX = menuWidth + 40;
				landerDX = 0;
				console.log("x left shutdown");
			}

			
			if( (landerX > (menuWidth + 40 + (gameWidth - landerWidth))) && landerDX > 0){
				landerX = menuWidth + 40 + (gameWidth - landerWidth);
				landerDX = 0;
				console.log("x right shutdown");
			}
			

			//This checks Y location
			if(landerY >= gameHeight - landerWidth){
				landerY = gameHeight - landerWidth;
		         
		         //change to handle a crash
		         if(landerDY > 4) {
		         	crashed = true;
		         	landerDX = 0;
		         }

				landerDY = 0;
				landerDX = 0;

			}

		    //drawing based on crash state...
		    if(crashed === false){
		    	//draw
				landerImage.style.left = landerX + 'px';
				landerImage.style.top = landerY + 'px';
				setFlamePosition();  //***** TO MOVE THE FLAME


		    } else {
		    	moving = false;
		        landerImage.style.display = "none";
		        hideFlame();
		    	blowUpImage.style.left = menuWidth +30 +landerX + 'px';
		    	blowUpImage.style.top = landerY + 'px';
		    	blowUpImage.style.display = "block";

		    }
		} else {
			flameImage.style.display = "none";
			moving = false;
			landerDY = 0;
			landerDX = 0;
			setTimeout(doTheWinAlert, 750);

			
		}
	}
}



document.getElementById('reset').onclick = resetAnimation;
document.getElementById('start').onclick = startAnimation;





setTargetLocation();
setLanderLocation();
showFlame();




//anonymous function
document.onkeydown = function(e){
//alert("hi you pressed the key with code " + e.keyCode);
   //37 = left
   //38 = up
   //39 = right
   //40 = down
   //32 = space bar

   //protection
   //if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
   //     e.preventDefault();
   
   // }

    switch(e.keyCode){

    	// spacebar
    	case 32:
    		//alert("You pushed the spacebar");
    		crashed = false;
    		resetAnimation();
    		startAnimation();	
    		break;

    	//left
    	case 37:
    	   	//alert("You pushed the left arrow"); 
    	   landerDX += -1;
    	   showFlame();
    	   break;

    	//up
    	case 38:
    	   //	alert("You pushed the up arrow");
    	   landerDY -=9;
    	   showFlame();
    	   break;

    	// right
    	case 39:
    	   	//alert("You pushed the right arrow");
    	   	landerDX += 1;
    	   	showFlame();
    		break;

    	//down..not using right now
    	case 40:
    	   	//alert("You pushed the down arrow");
    		break;

    }

};


//On Key Up
//Another anonymous function
document.onkeyup = function(e){

   //protection
   //if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
   //    e.preventDefault();
   // }

    switch(e.keyCode){

    	case 32:
    	   	//spacebar is released
    	break;

    	case 37:
    	   	//left arrow Key is released
    	   	//landerDX = 0;
    	   	hideFlame();
    	break;

    	case 38:
    	   	//up arrow key is released
    	   	hideFlame();
    	break;

    	case 39:
    	   	//right arrow Key is released
    	   	//landerDX = 0;
    	   	hideFlame();
    	break;

    	case 40:
    	   	//down arrow key is released
    	break;



    }


};







