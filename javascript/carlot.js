var CarLot = (function (cars) {
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
      inventory = JSON.parse(this.responseText);
      populatePage(inventory);
    }
  };

})(CarLot || {});




