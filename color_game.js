var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
})

function setupModeButtons(){
	for(var i =0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6
		reset();
		})
	}	
}

function init(){
	setupModeButtons();
	setupSquareButtons();
	reset();
}

function changeColors(color){
	//loop through all squares and change each color to correct color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function setupSquareButtons(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent= "Play Again?"
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}

		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);

	//pick new random color from array
	pickedColor = pickColor();

	//change color display to match picked color
	colorDisplay.textContent= pickedColor

	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue"
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return array
	return arr;
}

function randomColor(){
	//pick red 0-255
	var r = Math.floor(Math.random()*256);
	//pick green 0-255
	var g = Math.floor(Math.random()*256);
	//pick blue 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

