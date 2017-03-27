//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (styleEvents) {

	styleEvents.resetStyle = function (clickEvent) {
//resets the border thickness and background color for each car element back to the original values. 
	};

	styleEvents.setStyle = function (clickEvent) {
//The other function changes the thickness of the border of a car element, and changes its background color. 

	};

	return styleEvents;

})(CarLot || {});