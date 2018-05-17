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
var targetY
var targetWidth = 120;

var menu = document.getElementById("menuBarSidePanel");
var menuRect = menu.getBoundingClientRect();
var menuHeight = Math.round(menuRect.bottom - menuRect.top);
var menuWidth = Math.round(menuRect.right - menuRect.left);

function setTargetLocation()
{
	//Code to set the target
	targetY = gameHeight - 95;  //somewhere 95 pixels up from bottom...
	targetX = menuWidth + 10 + Math.round(Math.random() * (gameWidth - targetWidth - 20));

	targetImage.style.left = targetX + 'px';
	targetImage.style.top = targetY + 'px';



}


setTargetLocation();










