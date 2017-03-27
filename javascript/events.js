//The second IIFE should augment the original one 
//that creates all of the `eventHandlers` for the application. 

var CarLot = (function (carEvents) {
var textInput = document.getElementById("carDescription");
var editScribe = document.getElementById("redescribe");

	carEvents.activateEvents = function () {
		var clickyCar = document.getElementsByClassName("clicky");
		clickyCar.addEventListener("click", CarLot.setStyle());
	}

	return carEvents;

})(CarLot || {});