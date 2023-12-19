// Import React Libraries
import React from 'react';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import compoment

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { StyledLink } from '../../utils/Style/GlobalStyle';

// Import Colors
import colors from '../../utils/Colors';

// Import constantes
import { responsiveWidthTablet, headerHeight, zIndexSideNav } from '../../utils/Constant';

const StyledUl = styled.ul`
  height: ${headerHeight}px;

    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    
    padding-left: 80%;
    z-index:${zIndexSideNav};
    
    margin:0;
    background: ${colors.marineBlue};

    @media (max-width: ${responsiveWidthTablet}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100px;
        padding: 3rem 3rem;
        align-items: stretch;
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
const StyledLi = styled.li`

`;

function NavMenu () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();
  function handleLinkClick () {
    setBurgerButtonState(false);
    scrollToTop();
    console.log('handleLinkClick');
  }

  return (
    <div id='sideNav'>
      <StyledUl burgerButtonState={burgerButtonState} id='sideul'>
            <StyledLi><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/Account" onClick={handleLinkClick}>Account</StyledLink></StyledLi>
        </StyledUl>
    </div>

  );
}

export default NavMenu;