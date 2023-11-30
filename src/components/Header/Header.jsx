// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Component
import Navbar from '../Nav/Navbar';
import NavItems from '../Nav/NavItems';
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
`;

const StyledHeader = styled.div`
  height: ${headerHeight}px;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  margin-left: ${sideMargin}px;
`;
const NavCartDiv = styled.div`
  display:flex;
  align-items: center;
  margin-right: ${sideMargin}px;
`;

const NavBarDiv = styled.div`
  margin-right: ${sideMargin}px;
`;

const NavItemDiv = styled.div`
  margin-left: ${sideMargin}px;
`;

function Header ({ isOpen, setIsOpen, cart, updateCart }) {
  function handleOnClick () {
    scrollToTop();
  }
  console.log('Header');
  console.log(`cart : ${cart}`);
  console.log(`isOpen : ${isOpen}`);

  return (
    <HeaderWrapper>
      <StyledHeader>
        <LogoDiv id='#LogoDiv'>
          <Link to='/' onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavCartDiv>
          <NavBarDiv>
            <Navbar/>
          </NavBarDiv>
          <CartButton isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} updateCart={updateCart} />
        </NavCartDiv>
      </StyledHeader>
      <NavItemDiv>
        <NavItems/>
      </NavItemDiv>
    </HeaderWrapper>
  );
}
Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default Header;
