// Function to check if an individual cart item has the desired structure
export function isValidCartItem (item) {
  const expectedKeys = [
    'name', 'category', 'subCategory', 'id', 'available', 'weight',
    'picture1', 'picture2', 'picture3', 'picture4', 'picture5', 'picture6',
    'brand', 'price'
  ];

  return (
    typeof item === 'object' &&
    'item' in item &&
    typeof item.item === 'object' &&
    expectedKeys.every(key => key in item.item)
  );
}

export function addToCart (cart, updateCart, item) {
  const currentItemAdded = cart.find((itemFound) => {
    return itemFound.item.name === item.name;
  }
  );
  if (currentItemAdded) {
    const cartFilteredCurrentItem = cart.filter(
      (itemFiltered) => itemFiltered.item.name !== item.name
    );
    updateCart([
      ...cartFilteredCurrentItem,
      { item, amount: currentItemAdded.amount + 1 }
    ]);
  } else {
    updateCart([...cart, { item, amount: 1 }]);
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
