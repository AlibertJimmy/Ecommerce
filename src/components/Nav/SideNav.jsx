// Import React Libraries
import React from 'react';

// Import Context
import { useNav } from '../../context';

// Import compoment

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { StyledLink } from '../../utils/Style/GlobalStyle';

// Import Colors
import colors from '../../utils/Colors';

// Import constantes
import { responsiveWidthTablet, headerHeight } from '../../utils/Constant';

// z-index:25;
const StyledUl = styled.ul`
  height: ${headerHeight}px;

    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    
    padding-left: 80%;
    
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

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
       li{
            margin-bottom: 0px;
       }
    }
`;
const StyledLi = styled.li`

`;

function SideNav () {
  const { openBurgerButton, setOpenBurgerButton } = useNav();
  function handleLinkClick () {
    setOpenBurgerButton(false);
    scrollToTop();
    console.log('handleLinkClick');
  }

  return (
    <div id='sideNav'>
      <StyledUl open={openBurgerButton} id='sideul'>
            <StyledLi><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/Account" onClick={handleLinkClick}>Account</StyledLink></StyledLi>
        </StyledUl>
    </div>

  );
}

export default SideNav;
