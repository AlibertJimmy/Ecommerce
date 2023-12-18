// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Navbar from '../Nav/Navbar';
// import NavItems from '../Nav/NavItems';
import Logo from '../Nav/Logo/Logo';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/Styles';

// Import Constants
import { headerHeight } from '../../utils/Constant';
import CartButton from '../Cart/CartButton';

const sideMargin = 20;

const HeaderWrapper = styled.div`
  ${commonHeaderFooter};
  flex-direction: column;
  color: white;
  position: fixed;
  top:0;
  z-index: 99;
`;

const StyledHeader = styled.div`
  height: ${headerHeight}px;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  margin-left: ${sideMargin}px;
  position: fixed;
`;
const CartDiv = styled.div`
  display:flex;
  position: fixed;
  right: 0;
  align-items: center;
  margin-right: ${sideMargin}px;
`;

const NavBarDiv = styled.div`
  width: 100%;
`;

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
          <CartButton />
        </CartDiv>
      </StyledHeader>
    </HeaderWrapper>
  );
}

export default Header;
