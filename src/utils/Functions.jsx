export function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
};

export function addToCart (cart, updateCart, name, price) {
  const currentPlantAdded = cart.find((plant) => plant.name === name);
  if (currentPlantAdded) {
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );
    updateCart([
      ...cartFilteredCurrentPlant,
      { name, price, amount: currentPlantAdded.amount + 1 }
    ]);
  } else {
    updateCart([...cart, { name, price, amount: 1 }]);
  }
}

export function itemQuantity (cart) {
  let quantity = 0;
  if (!cart) {
    return 0;
  }

  for (let i = 0; i < cart.length; i++) {
    quantity = quantity + cart[i].amount;
  }
  console.log('cart');
  return quantity;
};
