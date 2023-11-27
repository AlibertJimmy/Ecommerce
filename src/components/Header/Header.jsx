// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Navbar from '../Nav/Navbar';
import Logo from '../Nav/Logo/Logo';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/Styles';

// Import Constants
import { headerHeight } from '../../utils/Constant';

const StyledHeader = styled.div`
  ${commonHeaderFooter};
  height: ${headerHeight}px;

  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
`;

const NavBarDiv = styled.div`
`;

function Header () {
  function handleOnClick () {
    scrollToTop();
  }

  return (
      <StyledHeader>
        <LogoDiv id='#LogoDiv'>
          <Link to='/' onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavBarDiv>
          <Navbar/>
        </NavBarDiv>

      </StyledHeader>
  );
}

export default Header;
