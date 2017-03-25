//The first IIFE should add a public function (e.g. `loadInventory`) 
//that loads the `inventory.json` file and 
//stores the inventory in a private variable. 
//It should also expose a public getter to read the array of cars 
//(e.g. `getInventory`).

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {

      });
    }
  };

})();