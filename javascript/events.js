//The second IIFE should augment the original one 
//that creates all of the `eventHandlers` for the application. 

var CarLot = (function (cars) {
		var clickyCar = document.getElementsByClassName("clicky");

	cars.activateEvents = function () {
		document.body.addEventListener("click", CarLot.setStyle);
	}

	return cars;

})(CarLot || {});