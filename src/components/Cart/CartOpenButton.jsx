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
import { CartButtonWrapper, OpenCartButton, CartIcon } from '../../utils/Style/CartStyle';

function CartOpenButton () {
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
    <CartButtonWrapper ref={cartRef} id='cartButtonWrapper'>
      <OpenCartButton onClick={() => setIsOpen(!isOpen)} amount={amoutOfItemInCart} id='cartButton'>
        <CartIcon id='cartIcon' src={CartWhite} alt='cartPic'/>
      </OpenCartButton >
      <Cart />
    </CartButtonWrapper>
  );
}

export default CartOpenButton;
