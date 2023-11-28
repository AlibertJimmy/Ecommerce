// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import Cart from './Cart';

// Import Style
import styled from 'styled-components';

const CartWrapper = styled.div`
  display:flex;
  border: 1px solid red;
  height: 20px;
  width: 40px;
`;

const ToggleCartButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  
  
  ${props =>
    props.isOpen
      ? `
        color: red;
      `
      : `
        color: white;
      `}
    
`;

function CartButton ({ isOpen, setIsOpen, cart, updateCart }) {
  return (
    <CartWrapper id='#CartWrapperButton'>
      <ToggleCartButton
        isOpen={ isOpen }
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'close' : 'open'}
      </ToggleCartButton >
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} updateCart={updateCart}/>
    </CartWrapper>
  );
}

CartButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default CartButton;
