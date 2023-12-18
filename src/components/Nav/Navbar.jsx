// Import React Libraries
import React, { useEffect, useState } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Component
import Burger from './BurgerButton';

// Import Style
import styled from 'styled-components';

// Import Constants
import { headerHeight } from '../../utils/Constant';

const BaseNav = ({ className, children }) => <nav className={className}>{children}</nav>;

BaseNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const StyledNav = styled(BaseNav)`
  height: ${headerHeight}px;
  z-index: 9999;
`;

function Navbar () {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <StyledNav isScrolled={isScrolled} id='navBar'>
            <Burger/>
        </StyledNav>
  );
};

export default Navbar;
