// This is the javascript that runs the lunar lander

//alert("Happy Monday");

var game = document.getElementById("gameWindow");
var gameRect = game.getBoundingClientRect();
var gameHeight = Math.round(gameRect.bottom - gameRect.top);
var gameWidth = Math.round(gameRect.right - gameRect.left);

//alert("hi, the gameHeight = " + gameHeight);
//alert("hi, the gameWidth = " + gameWidth);

var moonImage = document.getElementById("moon");
/*
moonImage.style.zIndex = "0";
moonImage.style.position = "absolute";
moonImage.style.bottom = "0";
moonImage.style.left = "100";
moonImage.style.width = "70%";
*/


