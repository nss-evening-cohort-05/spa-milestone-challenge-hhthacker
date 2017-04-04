//The second IIFE should augment the original one 
//that creates all of the `eventHandlers` for the application. 

var CarLot = (function (cars) {
		var clickyCar = document.getElementsByClassName("clicky");
		var textInput = document.getElementById("carDescription");

	cars.activateEvents = function () {
		document.body.addEventListener("click", CarLot.setStyle);
		textInput.addEventListener("keyup", CarLot.enterText);
	}
	return cars;

})(CarLot || {});