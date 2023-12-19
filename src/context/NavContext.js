// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Nav Context
const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [burgerButtonState, setBurgerButtonState] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem('burgerButtonState');
    const savedNav = JSON.parse(json);
    if (savedNav) {
      setBurgerButtonState(savedNav);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(burgerButtonState);
    localStorage.setItem('burgerButtonState', json);
  }, [burgerButtonState]);

  const contextValue = {
    burgerButtonState,
    setBurgerButtonState
  };

  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
};

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useNavContext = () => {
  return useContext(NavContext);
};
