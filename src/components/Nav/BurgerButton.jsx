// Import React Libraries
import React, { useEffect, useRef } from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Context
import { useNavContext } from '../../context/NavContext';
import { useCartContext } from '../../context/CartContext';

// Import Component
import SideNav from './SideNav';
import NavItems from './NavItems';

// Import Style
import styled from 'styled-components';
// import colors from '../../utils/Colors';

// Import Constante
import { responsiveWidthTablet, zIndexBurgerButton } from '../../utils/Constant';

const MenuWrapper = styled.div`
  width: 100%;
`;

const BurgerButton = styled.div`
    width: 2rem;
    height: 2rem;

    position: fixed;
    top: ${({ burgerButtonState }) => burgerButtonState ? '17px' : '10px'};
    right: ${({ burgerButtonState }) => burgerButtonState ? '10px' : '15px'};
    
    border-radius: 5px;
    padding: 2px;

    display: none;

    z-index: ${zIndexBurgerButton};

    @media (max-width: ${responsiveWidthTablet}px){
      
      display: ${({ cartState }) => cartState ? 'none' : 'flex'};
      justify-content: space-around;
      flex-flow: column nowrap;
      cursor: pointer;
    }

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({ burgerButtonState }) => burgerButtonState ? 'translate(14%) rotate(45deg)' : 'translate(0) rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ burgerButtonState }) => burgerButtonState ? 'translate(100%)' : 'translate(0)'};
            opacity: ${({ burgerButtonState }) => burgerButtonState ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ burgerButtonState }) => burgerButtonState ? 'translate(14%) rotate(-45deg)' : 'translate(0) rotate(0)'};
        }
        
        @media (max-width: ${responsiveWidthTablet}px){
          background-color: ${({ burgerButtonState }) => burgerButtonState ? 'black' : 'white'};
        }

    }
`;

export const sideNavPropsType = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
});

function Burger () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();
  const { cartState } = useCartContext();
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      /*
      console.log('burgerRef.current');
      console.log(burgerRef.current);
      console.log('!burgerRef.current.contains(event.target)');
      console.log(!burgerRef.current.contains(event.target));
      console.log('event.target');
      console.log(event.target);
      */

      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setBurgerButtonState(false);
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
    <MenuWrapper ref={burgerRef} id='menuWrapper'>
        <BurgerButton burgerButtonState={burgerButtonState} cartState={cartState} onClick={() => setBurgerButtonState(!burgerButtonState)} id='burgerButton'>
            <div />
            <div />
            <div />
        </BurgerButton>
        <SideNav />
        <NavItems />
    </MenuWrapper>
  );
}

export default Burger;
