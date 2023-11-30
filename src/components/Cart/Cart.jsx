// Import React Libraries
import React from 'react';

// Import Context
import { useCart } from '../../context';

// Import Function
import { itemQuantity } from '../../utils/CartFunctions/Functions';

// Import Style
import styled from 'styled-components';
import CloseButton from './CloseButton';

const CartContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top:0;
  right: 0;

  height: 100%;

  color: black;
  background-color: white;
  margin:0;
  padding: 32px;
  
  justify-content: flex-start;
  width: 300px;
  z-index: 99;

  border: 1px solid blue;

  ${props =>
    props.isOpen
      ? `
      
      transform: translateX(0);
      `
      : `
      transform: translateX(100%);
      `}
`;

function Cart () {
  const { isOpen, setIsOpen, cart, updateCart } = useCart();
  if (!cart) {
    return null;
  }
  const total = cart.reduce(
    (acc, item) => {
      return acc + item.amount * item.item.price;
    },
    0
  );
  return (
      <CartContentWrapper isOpen={ isOpen } id='CartWrapper'>
        <h2>Cart ({itemQuantity(cart)})</h2>
        <CloseButton isOpen={isOpen} setIsOpen={setIsOpen}/>
          {cart.length > 0
            ? (
            <div>
              <ul>
                {cart.map(({ item, amount }, index) => (
                  <div key={`${item.name}-${index}`}>
                    {item.name} {item.price}€ x {amount}
                  </div>
                ))}
              </ul>
              <h3>Total :{total}€</h3>
              <button onClick={() => updateCart([])}>Empty the cart</button>
            </div>
              )
            : (
            <div>Your cart is empty</div>
              )}
    </CartContentWrapper>
  );
}

export default Cart;
