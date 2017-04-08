var CarLot = (function (cars) {
  var myinventory = [];

//public function: parse xhr request into object array & loads the `inventory.json` file 
//stores the inventory in a private variable. 
  return {

    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", CarLot.parseInventory);
      inventoryLoader.open("GET", "javascript/inventory.json");
      inventoryLoader.send(); 
    },
    parseInventory: function (inventory) {
      myinventory = JSON.parse(this.responseText);
      populatePage(myinventory);
    },

    getInventory: function () {
    return myinventory;
  }
  };

})(CarLot || {});




