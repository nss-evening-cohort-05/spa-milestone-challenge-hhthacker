	//click event on card to make border wider and change background color
		//on click, clear value of text input in navbar and focus cursor
		//typing in the input the description of the car is bound and matches exactly
	//parent element with class container
	//use bootstrap to create rows, 3 columns each
	//use counter variable to close row after 3 columns

var cardDiv = document.getElementById("carCards");

  // Loop over the inventory and populate the page
function populatePage (inventory) {
	var carString = "";
for (var i=0; i < inventory.inventory.length; i++) {
	carString +=`<div class="row col-xs-3 thumbnail"><div class="noclicky">`;
	carString +=`<img src="${inventory.inventory[i].image}" alt="${inventory.inventory[i].model}">`;
	carString +=`<p class="special">${inventory.inventory[i].make} ${inventory.inventory[i].model}</p>`;
	carString +=`<p><strong>${inventory.inventory[i].price}</strong> Made in ${inventory.inventory[i].year}</p>`;
	carString +=`<p class="describe" id="redescribe-${[i]}">${inventory.inventory[i].description}</p>`;
	carString +=`</div></div>`;
};
cardDiv.innerHTML = carString;
	};
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);