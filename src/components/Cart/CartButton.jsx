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

const CartIMG = styled.img`
    width: 25px;
    height:25px;

    &::after {
      content: "${props => (props.amount > 0 ? props.amount : '')}";
      position: absolute;
      top: 0;
      right: 0;
      background-color: red; // You can customize the background color
      color: white;
      padding: 2px 5px;
      border-radius: 50%;
      font-size: 12px;
    }

    
`;

const ClosingCross = styled.div`
    width: 2rem;
    height: 2rem;
    
    position:fixed;
    top: 5px;
    right: 5px;

    border: 1px solid black;
    
    border-radius: 5px;
    padding: 2px;

    z-index: 20;

    color: black;

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        background-color: black;

        &:nth-child(1){
            transform: translate(14%, 65%) rotate(45deg);
        }

        &:nth-child(2){
            transform: translate(14%, 500%) rotate(-45deg);
        }
    }
`;

function CartButton ({ isOpen, setIsOpen, cart, updateCart }) {
  const amoutOfItemInCart = itemQuantity(cart);
  return (
    <CartWrapper id='#CartWrapperButton'>
      <ToggleCartButton
        isOpen={ isOpen }
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen
          ? <ClosingCross>
            <div/>
            <div/>
          </ClosingCross>
          : <CartIMG src={CartWhite} alt='cartPic' amount={amoutOfItemInCart}></CartIMG>
        }
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
