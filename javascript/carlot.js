var CarLot = (function () {
  var inventory = [];
//public function: parse xhr request into object array & loads the `inventory.json` file 
//stores the inventory in a private variable. 

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", CarLot.parseInventory);
      inventoryLoader.open("GET", "javascript/inventory.json");
      inventoryLoader.send(); 
    },

    parseInventory: function () {
      var inventory = JSON.parse(this.responseText);
      populatePage(inventory);
    },

    // makeInventory: function (data) {
    //   myInventory = data.inventory;
    //   console.log("making it", myInventory);
    // },

//a public getter to read the array of cars 
    getInventory: function () {
      return inventory;
    }
  };

})(CarLot || {});




