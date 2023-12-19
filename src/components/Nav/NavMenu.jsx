// Import React Libraries
import React from 'react';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import compoment

// Import Functions
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import { StyledLink } from '../../utils/Style/GlobalStyle';
import { StyledUlMenu } from '../../utils/Style/NavStyle';

function NavMenu () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();
  function handleLinkClick () {
    setBurgerButtonState(false);
    scrollToTop();
    console.log('handleLinkClick');
  }

  return (
    <div id='sideNav'>
      <StyledUlMenu burgerButtonState={burgerButtonState} id='sideul'>
            <li><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></li>
            <li><StyledLink to="/Account" onClick={handleLinkClick}>Account</StyledLink></li>
        </StyledUlMenu>
    </div>

  );
}

export default NavMenu;
