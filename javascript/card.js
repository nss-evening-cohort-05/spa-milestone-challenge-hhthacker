//The final IIFE should augment the object with two more functions. 
//The function must accept one argument: A car DOM element that was clicked on.

var CarLot = (function (cars) {
		var textInput = document.getElementById("carDescription");
		var editScribe = "";
		var selectedCar;

	cars.resetStyle = function (event) {
		console.log("reset function");
	},

	cars.setStyle = function (event) {
		var carClasses = document.getElementsByClassName("thumbnail");
		for (var x = 0; x < 6; x++) {

		if (event.target.classList.contains("describe")) {
			textInput.focus();
			console.log("no event1", event.target.parentNode.classList);

			selectedCar = event.target;
			event.target.parentNode.classList.remove("noclicky");
			event.target.parentNode.parentNode.classList.add("clicky");

		} else if (event.target.classList.contains("grandchild")) {
			textInput.focus();
			console.log("no event2", event.target.parentNode.classList);

			selectedCar = event.target.parentNode.childNodes[3];
			event.target.parentNode.classList.remove("noclicky");			
			event.target.parentNode.parentNode.classList.add("clicky");

		} else if (event.target.classList.contains("child")) {
			textInput.focus();
			console.log("no event3", event.target.classList);

			selectedCar = event.target.childNodes[3];
			event.target.classList.remove("noclicky");
			event.target.parentNode.classList.add("clicky");
		};
		textInput.value = selectedCar.innerHTML;
		textInput.addEventListener("keyup", function(){
			textInput.onkeydown = function (){
        if (window.event.keyCode === 13) {
          textInput.value = "";
        } else {
          selectedCar.innerHTML = textInput.value;
        };
      };
	});
};
},




		// if (event.target.parentNode.classList.contains("noclicky")) {
		// 	event.target.parentNode.classList.remove("noclicky");
		// 	event.target.parentNode.classList.add("clicky");
		// 	//event.target.
		// 	textInput.focus();
		// 	textInput.value = "";
		// 	event.target.innerHTML = editScribe;
		// 	textInput.value = editScribe;
		// 	//CarLot.enterStyle();

		// } else if (event.target.parentNode.classList.contains("thumbnail")) {
		// 	event.target.classList.remove("noclicky");
		// 	event.target.classList.add("clicky");
		// 	textInput.focus();
		// }
		// textInput.addEventListener("keyup", CarLot.enterStyle);

	cars.enterStyle = function (event) {
      textInput.onkeydown = function (){
        if (window.event.keyCode === 13) {
          textInput.value = "";
        } else {
         textInput.value = editScribe;
			};
		};
	}
	return cars;

})(CarLot || {});


