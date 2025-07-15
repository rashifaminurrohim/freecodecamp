const inventory = [];

const findProductIndex = (productName) => {
  const productObj = inventory.find(product => product.name === productName.toLowerCase());
  return inventory.indexOf(productObj);
}

const addProduct = (productObj) => {
  const lowerName = productObj.name.toLowerCase();
  productObj.name = lowerName;
  const index = inventory.findIndex(item => item.name === productObj.name);
  if (index !== -1) {
    inventory[index].quantity += productObj.quantity;
    console.log(`${productObj.name} quantity updated`);
  } else {
    inventory.push(productObj);
    console.log(`${productObj.name} added to inventory`);
  }
};


const removeProduct = (productName, subtQuantity) => {
  const lowerName = productName.toLowerCase();
  const indexProduct = inventory.findIndex(item => item.name === lowerName);
  if (indexProduct !== -1) {
    const productQuantity = inventory[indexProduct].quantity;
    if (productQuantity >= subtQuantity) {
      inventory[indexProduct].quantity -= subtQuantity;
      const quantity = inventory[indexProduct].quantity;
      if (quantity === 0) {
        inventory.splice(indexProduct, 1);
        console.log(`${lowerName} removed from inventory`);
      } else {
        console.log(`Remaining ${lowerName} pieces: ${quantity}`);
      }
    } else {
      console.log(`Not enough ${lowerName} available, remaining pieces: ${productQuantity}`);
    }
  } else {
    console.log(`${lowerName} not found`);
  }
};
