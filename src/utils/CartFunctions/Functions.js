// Function to check if an individual cart item has the desired structure
export function isValidCartItem (item) {
  const expectedKeys = [
    'name', 'category', 'subCategory', 'id', 'available', 'weight',
    'picture1', 'picture2', 'picture3', 'picture4', 'picture5', 'picture6',
    'brand', 'price'
  ];

  return (
    typeof item === 'object' &&
    'itemProperty' in item &&
    typeof item.itemProperty === 'object' &&
    expectedKeys.every(key => key in item.itemProperty)
  );
}

export function addToCart (cart, updateCart, itemProperty) {
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
      { itemProperty, amount: currentItemAdded.amount + 1 }
    ]);
  } else {
    updateCart([...cart, { itemProperty, amount: 1 }]);
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
