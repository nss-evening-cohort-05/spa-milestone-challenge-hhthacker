var CarLot = (function () {
  var myInventory = [];
//public function: parse xhr request into object array & loads the `inventory.json` file 
//stores the inventory in a private variable. 

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", CarLot.parseInventory);
      inventoryLoader.open("GET", "javascript/inventory.json");
      inventoryLoader.send(); 
    },

    parseInventory: function () {
      var inventoryData = JSON.parse(this.responseText);
      CarLot.makeInventory(inventoryData);
    },

    makeInventory: function (data) {
      myInventory = data.inventory;
      console.log("making it", myInventory);
    },

//a public getter to read the array of cars 
    getInventory: function () {
      CarLot.loadInventory();
      return myInventory;
    }
  };

})(CarLot || {});


