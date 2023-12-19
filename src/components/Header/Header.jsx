// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Navbar from '../Nav/Navbar';
import CartOpenButton from '../Cart/CartOpenButton';
import Logo from './Logo/Logo';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import { CartDiv, HeaderWrapper, LogoDiv, NavBarDiv, StyledHeader } from '../../utils/Style/HeaderStyle';

function Header () {
  function handleOnClick () {
    scrollToTop();
  }

  return (
    <HeaderWrapper id='headerWrapper'>
      <StyledHeader id='styledHeader'>
        <LogoDiv id='logoDiv'>
          <Link to='/' onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavBarDiv id='navBarContainer'>
            <Navbar/>
        </NavBarDiv>
        <CartDiv id='cartContainer'>
          <CartOpenButton id='cartOpenButton'/>
        </CartDiv>
      </StyledHeader>
    </HeaderWrapper>
  );
}

export default Header;
