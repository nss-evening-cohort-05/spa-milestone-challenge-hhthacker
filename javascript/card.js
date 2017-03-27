//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (styleEvents) {

	styleEvents.resetStyle = function (clickEvent) {
		var selectedCar = document.getElementsbyClassName("noclicky");
		console.log("reset function");
	},

	styleEvents.setStyle = function (clickEvent) {
	for (var x = 0; x < inventory.length; x++) {
			selectedCar[x].classList.remove("noclicky");
			};
			if (event.target.classList.contains("describe")) {
				event.target.classList.add("clicky"); 
			};
			textInput.value = editScribe.innerHTML;
			textInput.addEventListener("keyup", myEnter);
	},
	styleEvents.enterStyle = function myEnter() {
      textInput.onkeydown = function (){
        if (window.event.keyCode === 13) {
          textInput.value = "";
        } else {
          editScribe.innerHTML = textInput.value;
			};
		};

	}
	return styleEvents;

})(CarLot || {});


