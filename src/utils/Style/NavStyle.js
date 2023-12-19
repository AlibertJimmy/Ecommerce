// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import Constant
import {
  responsiveWidthTablet, zIndexBurgerButton,
  headerHeight, zIndexNavBar,
  zIndexSideNav
} from '../../utils/Constant';

const BaseNav = ({ className, children }) => <nav className={className} id='navBar'>{children}</nav>;

BaseNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

// Burger Button

export const MenuWrapper = styled.div`
  width: 100%;
`;

export const BurgerButton = styled.div`
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

// NavBar

export const StyledNavBar = styled(BaseNav)`
  height: ${headerHeight}px;
  z-index: ${zIndexNavBar};
`;

const StyledUlNav = css`
  display: flex;
  align-items: center;

  gap: 2rem;

  list-style: none;
  text-decoration: none;

  height: ${headerHeight}px;
  z-index:${zIndexSideNav};

  margin:0;
  background: ${colors.marineBlue};

  @media (max-width: ${responsiveWidthTablet}px){
    flex-flow: column nowrap;
    align-items: stretch;

    position: fixed;
    right: 0;
    
    height: 100vh;
    width: 100px;
    
    margin-top: 0;
    margin-right:0;

    gap:1rem;
    
    justify-content: top-start;
    
    background: #ffffff;

    transform: ${({ burgerButtonState }) => burgerButtonState ? 'translateX(0)' : 'translateX(100%)'};
   li{
        margin-bottom: 0px;
   }
}
`;

// NavMenu

export const StyledUlMenu = styled.ul`
  ${StyledUlNav};
    
  padding-left: 80%;

  @media (max-width: ${responsiveWidthTablet}px){
      top: 0;
      padding: 3rem 3rem;
  }
`;

// NavItems

export const StyledUlItems = styled.ul`
${StyledUlNav};
 
  padding: 0 20px;

  @media (max-width: ${responsiveWidthTablet}px){

    top: 120px;
    padding: 0 3rem;
  }
`;
