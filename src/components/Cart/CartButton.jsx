// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import Cart from './Cart';

// Import Functions
import { itemQuantity } from '../../utils/Functions';

// Import Asset
import CartWhite from '../../assets/Functionnal_Icon/Cart_White.png';

// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidth } from '../../utils/Constant';

const CartWrapper = styled.div`
  display:flex;
  height: 25px;
  width: 40px;

  @media (max-width: ${responsiveWidth}px){
    margin-right: 50px;
  }
`;

const OpenCartButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  color: white;
  position: relative;

  &::after {

    ${props => (props.amount > 0
    ? `
    content: '${props.amount}';
    background-color: red;
    `
    : `
    content: '';
    background-color: transparent;
    `)}

    position: absolute;
    top: -12px;
    left: 15px;
    color: white;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 12px;
    z-index: 99999999999;
    display: flex;
    align-items: center;
    text-align: center;
    width: 10px;
    height: 10px;
  }
`;
const CartIMG = styled.img`
    width: 25px;
    height:25px;
`;

function CartButton ({ isOpen, setIsOpen, cart, updateCart }) {
  const amoutOfItemInCart = itemQuantity(cart);
  return (
    <CartWrapper id='#CartWrapperButton'>
      <OpenCartButton
        onClick={() => setIsOpen(!isOpen)}
        amount={amoutOfItemInCart}
      >
        <CartIMG id='CartIcon' src={CartWhite} alt='cartPic'></CartIMG>
      </OpenCartButton >
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
