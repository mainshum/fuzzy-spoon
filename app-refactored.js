function checkIfColorAndRemove (String color, event) {
	if (event.target.parentElement.parentElement.parentElement.classList.contains(color)) {
		event.target.parentElement.parentElement.parentElement.classList.remove(color);
	}
}

function addColor (String color, event) {
	event.target.parentElement.parentElement.parentElement.classList.add(color);
}


Function changeColor(List colors, event, String finalColor) {
	colors.forEach(function (color) {
		checkIfColorAndRemove(color, event)
	}
	addColor(finalColor, event)
}

const colors = ['redBg', 'blueBg', 'pinkBg', 'yellowBg']
colors.forEach(function (finalColor) {
	changeColor(colors, event, finalColor)
}
