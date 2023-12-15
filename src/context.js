// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Function
import { isValidCartItem } from './utils/CartFunctions/Functions';

// Nav Context
const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [openBurgerButton, setOpenBurgerButton] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem('openBurgerButton');
    const savedNav = JSON.parse(json);
    if (savedNav) {
      setOpenBurgerButton(savedNav);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(openBurgerButton);
    localStorage.setItem('openBurgerButton', json);
  }, [openBurgerButton]);

  const contextValue = {
    openBurgerButton,
    setOpenBurgerButton
  };

  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
};

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useNav = () => {
  return useContext(NavContext);
};

// Cart Context
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        /*
        console.log('parsedCart');
        console.log(parsedCart);
        */
        // Check if parsedCart is an array and has the desired structure
        if (Array.isArray(parsedCart) && parsedCart.every(item => isValidCartItem(item))) {
          updateCart(parsedCart);
        } else {
          console.error('Invalid cart format:', parsedCart);
        }
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    } else {
      console.error('No cart data found in local storage');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    cart,
    updateCart,
    isOpen,
    setIsOpen
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useCart = () => {
  return useContext(CartContext);
};
