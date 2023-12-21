// Import React Libraries
import React, { useEffect, useRef } from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';
import { useNavContext } from '../../context/NavContext';

// Import Components
import Cart from './Cart';

// Import Functions
import { isCartButton, itemQuantity } from '../../utils/Functions/cartFunctions';

// Import Asset
import CartWhite from '../../assets/Functionnal_Icon/Cart_White.png';

// Import Style
import { CartButtonWrapper, OpenCartButton, CartIcon } from '../../utils/Style/CartStyle';

function CartOpenButton () {
  const { cartState, setCartState, cart } = useCartContext();
  const { burgerButtonState } = useNavContext();
  const amoutOfItemInCart = itemQuantity(cart);
  const cartRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      /*
      console.log(handleClickOutside);
      console.log('cartRef.current');
      console.log(cartRef.current);
      console.log('cartRef.current.contains(event.target)');
      console.log(cartRef.current.contains(event.target));
      console.log('event.target');
      console.log(event.target);
      console.log(event.target.id);
      */
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (!isCartButton(event.target.id)) {
          console.log('cart clickOutside');
          setCartState(false);
        }
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [cartState]);

  return (
    <CartButtonWrapper ref={cartRef} id='cartButtonWrapper'>
      <OpenCartButton onClick={() => setCartState(!cartState)} amount={amoutOfItemInCart} id='cartButton' burgerButtonState={burgerButtonState}>
        <CartIcon id='cartIcon' src={CartWhite} alt='cartPic'/>
      </OpenCartButton >
      <Cart />
    </CartButtonWrapper>
  );
}

export default CartOpenButton;
