//The second IIFE should augment the original one 
//that creates all of the `eventHandlers` for the application. 

var CarLot = (function (carEvents) {

	carEvents.activateEvents = function () {
		console.log("activate events");
		// var clickyCar = document.getElementsByClassName("clicky");
		// clickyCar.addEventListener("click", CarLot.setStyle());
	}

	return carEvents;

})(CarLot || {});