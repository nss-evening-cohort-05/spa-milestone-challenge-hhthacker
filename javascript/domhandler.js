	//click event on card to make border wider and change background color
		//on click, clear value of text input in navbar and focus cursor
		//typing in the input the description of the car is bound and matches exactly
	//parent element with class container
	//use bootstrap to create rows, 3 columns each
	//use counter variable to close row after 3 columns

var cardDiv = document.getElementById("carCards");

// Loop over the inventory and populate the page
function populatePage (inventory) {
for (var i=0; i < inventory.length; i++){
	var carString = "";
	carString +=`<div class="clicky"><div class="row"><div class="col-sm-6 col-md-4"><div class="thumbnail">`;
	carString +=`<img src="inventory.image" alt="inventory.model">`;
	carString +=`<div class="caption"><h3>inventory.make</h3>`;
	carString +=`<p>inventory.model</p><p>inventory.year</p><p>inventory.price</p>`;
	carString +=`<p class="describe" id="redescribe">inventory.description</p>`;
	carString +=`</div></div></div></div></div>`;
//	carString +=``;
};
cardDiv.innerHTML = carString;
}  

// Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();

// Load the inventory and send a callback function to be invoked after the process is complete
CarLot.loadInventory();