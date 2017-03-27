//loop over array and build card for each car for DOM
	//includes all car information
//each card has a class for black border around it
	//click event on card to make border wider and change background color
		//on click, clear value of text input in navbar and focus cursor
		//typing in the input the description of the car is bound and matches exactly
	//parent element with class container
	//use bootstrap to create rows, 3 columns each
	//use counter variable to close row after 3 columns


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();