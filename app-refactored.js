const red = document.querySelectorAll(".red");
const pink = document.querySelectorAll(".pink");
const yellow = document.querySelectorAll(".yellow");
const blue = document.querySelectorAll(".blue");


console.log(red);

function colorListeners() {
    red.addEventListener('click', changeColor(redBg));
    pink.addEventListener('click', changeColor(pinkBg));
    yellow.addEventListener('click', changeColor(yellowBg));
    blue.addEventListener('click', changeColor(blueBg));
}

function changeColor(color) {
    e.target.parentElement.parentElement.parentElement.setAttribute("class", color);
}

colorListeners();


function checkIfColorAndRemove (String color, event) {
	if (event.target.parentElement.parentElement.parentElement.classList.contains(color)) {
		event.target.parentElement.parentElement.parentElement.classList.remove(color);
	}
}

function addColor (String color, event) {
	event.target.parentElement.parentElement.parentElement.classList.add(color);
}


Function changeColor(event, String finalColor, List colors = ['redBg', 'blueBg', 'pinkBg', 'yellowBg']) {
	colors.forEach(function (color) {
		checkIfColorAndRemove(color, event)
	}
	addColor(finalColor, event)
}
