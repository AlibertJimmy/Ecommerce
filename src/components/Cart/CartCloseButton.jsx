// Import React Libraries
import React from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';

// Import Style
import { ClosingCross } from '../../utils/Style/CartStyle';

function CartCloseButton () {
  const { cartState, setCartState } = useCartContext();
  return (
          <ClosingCross onClick={() => setCartState(!cartState)} id='cartClosingCross'>
            <div/>
            <div/>
          </ClosingCross>
  );
}

export default CartCloseButton;
