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

const NavBarDiv = styled.div`
  margin-right: ${sideMargin}px;
`;

const NavItemDiv = styled.div`
  margin-left: ${sideMargin}px;
`;

function Header ({ openBurgerButton, setOpenBurgerButton, isOpen, setIsOpen, cart, updateCart }) {
  function handleOnClick () {
    scrollToTop();
  }
  console.log('Header');
  console.log(`cart : ${cart}`);
  console.log(`isOpen : ${isOpen}`);
  console.log(`openBurgerButton : ${openBurgerButton}`);
  console.log(`setOpenBurgerButton : ${setOpenBurgerButton}`);

  return (
    <HeaderWrapper>
      <StyledHeader>
        <LogoDiv id='#LogoDiv'>
          <Link to='/' onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavBarDiv>
          <Navbar openBurgerButton={openBurgerButton} setOpenBurgerButton={setOpenBurgerButton}/>
        </NavBarDiv>
        <CartButton isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} updateCart={updateCart} />
      </StyledHeader>
      <NavItemDiv>
        <NavItems openBurgerButton={openBurgerButton} handleCloseBurger={() => setOpenBurgerButton(false)}/>
      </NavItemDiv>
    </HeaderWrapper>
  );
}
Header.propTypes = {
  openBurgerButton: PropTypes.bool.isRequired,
  setOpenBurgerButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default Header;
