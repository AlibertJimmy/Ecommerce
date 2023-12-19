// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

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

export const useNavContext = () => {
  return useContext(NavContext);
};
