//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (cars) {
		var textInput = document.getElementById("carDescription");
		var editScribe = document.querySelectorAll('p[id^="redescribe-"]');
		var selectedCar;

	cars.resetStyle = function (event) {
		console.log("reset function");
	},

	cars.setStyle = function (event) {
		console.log("set style", event);
		if (event.target.parentNode.classList.contains("noclicky")) {
			event.target.parentNode.classList.remove("noclicky");
			event.target.parentNode.classList.add("clicky");
			event.target.
			//event.target.
			textInput.focus();
			editScribe.innerHTML = textInput.value;
		} else if (event.target.parentNode.classList.contains("thumbnail")) {
			event.target.classList.remove("noclicky");
			event.target.classList.add("clicky");
			textInput.focus();
		}
		textInput.addEventListener("keyup", CarLot.enterStyle);
	},

	cars.enterStyle = function (event) {
      textInput.onkeydown = function (){
        if (window.event.keyCode === 13) {
          textInput.value = "";
        } else {
          editScribe.innerHTML = textInput.value;
			};
		};
	}
	return cars;

})(CarLot || {});


