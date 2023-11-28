// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import CartButton from './CartButton';

// Import Function
import { itemQuantity } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';

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

function Cart ({ isOpen, setIsOpen, cart, updateCart }) {
  if (!cart) {
    return null;
  }
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return (
      <CartContentWrapper isOpen={ isOpen } id='CartWrapper'>
        <CartButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        <h2>Cart ({itemQuantity(cart)})</h2>
          {cart.length > 0
            ? (
            <div>
              <ul>
                {cart.map(({ name, price, amount }, index) => (
                  <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
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

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default Cart;
