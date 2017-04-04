//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (cars) {
		var editScribe = "";
		var selectedCar;
		var textInput = document.getElementById("carDescription");


	cars.resetStyle = function (event) {
		console.log("reset function");
	},

	cars.setStyle = function (event) {
		var carClasses = document.getElementsByClassName("thumbnail");
		var carInventory = CarLot.getInventory();
		for (var x = 0; x < carInventory.inventory.length; x++) {
			carClasses[x].classList.remove("clicky");
		if (event.target.classList.contains("describe")) {
			textInput.focus();
			selectedCar = event.target;
			event.target.parentNode.parentNode.classList.add("clicky");
		} else if (event.target.classList.contains("grandchild")) {
			textInput.focus();
			selectedCar = event.target.parentNode.childNodes[3];
			event.target.parentNode.parentNode.classList.add("clicky");
		} else if (event.target.classList.contains("child")) {
			textInput.focus();
			selectedCar = event.target.childNodes[3];
			event.target.parentNode.classList.add("clicky");
			};
		textInput.value = selectedCar.innerHTML;
		};
	},
		cars.enterText = function (event) {
			textInput.onkeydown = function (){
        if (window.event.keyCode === 13) {
          textInput.value = "";
        } else {
          selectedCar.innerHTML = textInput.value;
        };
      };
	}
	return cars;
})(CarLot || {});


