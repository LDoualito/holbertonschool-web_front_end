const stock = {
    macbook: 2,
    iphone: 4
  };
  
  function processPayment(itemName) {
    if (stock[itemName.toLowerCase()] > 0) {
      stock[itemName.toLowerCase()]--;
      console.log(`Payment is being processed for item ${itemName}`);
    }
  }
  
  function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
  }
  
  function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName.toLowerCase()] > 0) {
      callbackPayment(itemName);
    } else {
      callbackError(itemName);
    }
  }
  
  const userInput = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
  
  processOrder(
    userInput,
    function(itemName) {
      processPayment(itemName);
    },
    function(itemName) {
      processError(itemName);
    }
  );
  