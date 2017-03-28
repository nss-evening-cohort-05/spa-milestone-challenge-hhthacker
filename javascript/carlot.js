var CarLot = (function () {
      var inventory = [];

//public function: parse xhr request into object array & loads the `inventory.json` file 
//stores the inventory in a private variable. 

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function parseInventory(){
      inventory = JSON.parse(this.responseText);
    });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      CarLot.getInventory();
    },

    // parseInventory: function () {

    // },

//a public getter to read the array of cars 
    getInventory: function () {
      console.log("inventory", inventory);
      return inventory;
    }
  };

})(CarLot || {});

