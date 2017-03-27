//The second IIFE should augment the original one 
//that creates all of the `eventHandlers` for the application. 

var CarLot = (function (carEvents) {

	carEvents.activateEvents = function () {
		var clickystuff.addEventListener("click", fire);

	}

	return carEvents;

})(CarLot || {});