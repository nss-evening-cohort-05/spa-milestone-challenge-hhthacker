//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (cars) {
		var selectedCar = document.getElementsByClassName("noclicky");
		var textInput = document.getElementById("carDescription");
		var editScribe = document.getElementsByClassName("redescribe");

	cars.resetStyle = function (event) {
		console.log("reset function");
	},

	cars.setStyle = function (event) {
		console.log("set style", event);
		if (event.target.parentNode.classList.contains("noclicky")) {
			event.target.parentNode.classList.remove("noclicky");
			event.target.parentNode.classList.add("clicky");
			textInput.focus();
			//textInput.value = editScribe.innerHTML;
		};
		textInput.addEventListener("keyup", CarLot.enterStyle);
	},

	cars.enterStyle = function myEnter() {
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


