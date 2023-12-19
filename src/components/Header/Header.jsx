// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Navbar from '../Nav/Navbar';
import CartOpenButton from '../Cart/CartOpenButton';
import Logo from './Logo/Logo';

// Import Function
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import {
  HeaderWrapper,
  CartDiv, LogoDiv, NavBarDiv
} from '../../utils/Style/HeaderStyle';

function Header () {
  function handleOnClick () {
    scrollToTop();
  }

  return (
    <HeaderWrapper id='headerWrapper'>
        <LogoDiv id='logoDiv'>
          <Link to='/' onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavBarDiv id='navBarContainer'>
            <Navbar/>
        </NavBarDiv>
        <CartDiv id='cartContainer'>
          <CartOpenButton id='cartOpenButton'/>
        </CartDiv>
    </HeaderWrapper>
  );
}

export default Header;
