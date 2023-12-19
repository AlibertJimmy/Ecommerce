// Import React Libraries
import React, { useEffect, useRef } from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';

// Import Components
import Cart from './Cart';

// Import Functions
import { itemQuantity } from '../../utils/CartFunctions/Functions';

// Import Asset
import CartWhite from '../../assets/Functionnal_Icon/Cart_White.png';

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import Constants
import { responsiveWidthTablet, zIndexCartButton } from '../../utils/Constant';

const CartWrapper = styled.div`
  display:flex;
  height: 25px;

  @media (max-width: ${responsiveWidthTablet}px){
    margin-right: 50px;
  }
`;

const OpenCartButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  z-index: ${zIndexCartButton};
  color: white;
  position: relative;

  &::after {

    ${props => (props.amount > 0
    ? `
    display: flex;
    justify-content: center;
    content: '${props.amount}';
    background-color: ${colors.orangeCustom};;
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

function CartButton () {
  const { isOpen, setIsOpen, cart } = useCartContext();
  const amoutOfItemInCart = itemQuantity(cart);
  const cartRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      /*
      console.log('cartRef.current');
      console.log(cartRef.current);
      console.log('cartRef.current.contains(event.target)');
      console.log(cartRef.current.contains(event.target));
      */
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <CartWrapper ref={cartRef} id='cartWrapper'>
      <OpenCartButton onClick={() => setIsOpen(!isOpen)} amount={amoutOfItemInCart} id='cartButton'>
        <CartIMG id='CartIcon' src={CartWhite} alt='cartPic'></CartIMG>
      </OpenCartButton >
      <Cart />
    </CartWrapper>
  );
}

export default CartButton;
