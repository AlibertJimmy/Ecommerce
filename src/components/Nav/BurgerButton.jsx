// Import React Libraries
import React, { useState, useEffect, useRef } from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Component
import SideNav from './SideNav';
import NavItems from './NavItems';

// Import Style
import styled from 'styled-components';
// import colors from '../../utils/Colors';

// Import Constante
import { responsiveWidth } from '../../utils/Constant';

const MenuWrapper = styled.div`
  padding:0;

`;
// border: ${({ open }) => (open ? `1px solid ${colors.burgerDivOpen}` : `1px solid ${colors.burgerDiv}`)};
const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;

    position: fixed;
    top: 10px;
    right: 15px;
    
    

    border-radius: 5px;
    padding: 2px;

    z-index: 20;

    display: none;

    @media (max-width: ${responsiveWidth}px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        border-color: black;
    }

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'translate(14%) rotate(45deg)' : 'translate(0) rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translate(100%)' : 'translate(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'translate(14%) rotate(-45deg)' : 'translate(0) rotate(0)'};
        }

        
        
        @media (max-width: ${responsiveWidth}px){
          background-color: ${({ open }) => open ? 'black' : 'white'};
        }

    }
`;

export const sideNavPropsType = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
});

function Burger () {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleCloseBurger () {
    setOpen(false);
  }

  return (
        <MenuWrapper ref={burgerRef} id='MenuWrapper'>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <SideNav open={open} handleCloseBurger={handleCloseBurger}/>
            <NavItems open={open} handleCloseBurger={handleCloseBurger}/>
        </MenuWrapper>
  );
}

export default Burger;
