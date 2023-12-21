// Function to check if an individual cart item has the desired structure
export function isValidCartItem (item) {
  const expectedKeys = [
    'name', 'category', 'subCategory', 'id',
    'available', 'weight',
    'illustrations',
    'brand', 'price'
  ];

  return (
    typeof item === 'object' &&
    'itemProperty' in item &&
    typeof item.itemProperty === 'object' &&
    expectedKeys.every(key => key in item.itemProperty)
  );
}

export function addToCart (cart, updateCart, itemProperty, amountToAdd) {
  const currentItemAdded = cart.find((itemFound) => {
    return itemFound.itemProperty.name === itemProperty.name;
  }
  );
  if (currentItemAdded) {
    const cartFilteredCurrentItem = cart.filter(
      (itemFiltered) => itemFiltered.itemProperty.name !== itemProperty.name
    );
    updateCart([
      ...cartFilteredCurrentItem,
      { itemProperty, amount: currentItemAdded.amount + amountToAdd }
    ]);
  } else {
    updateCart([...cart, { itemProperty, amount: amountToAdd }]);
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
  return quantity;
};

export function isCartButton (target) {
  /*
  Necessary check because when a product is remove from the list it's not considered contained by the even.target anymore
  */
  const cartButtons = ['cartMinusProductButton', 'cartPlusProductButton', 'cartRemoveProductButton', 'cartEmptyProductButton'];
  if (cartButtons.includes(target)) {
    return true;
  } else {
    return false;
  }
}
