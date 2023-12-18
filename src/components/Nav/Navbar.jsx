// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Component
import Burger from './BurgerButton';

// Import Style
import styled from 'styled-components';

// Import Constants
import { headerHeight, zIndexNavBar } from '../../utils/Constant';

const BaseNav = ({ className, children }) => <nav className={className} id='navBar'>{children}</nav>;

BaseNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const StyledNav = styled(BaseNav)`
  height: ${headerHeight}px;
  z-index: ${zIndexNavBar};
`;

function Navbar () {
  return (
        <StyledNav>
            <Burger/>
        </StyledNav>
  );
};

export default Navbar;
