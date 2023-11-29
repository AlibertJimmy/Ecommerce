// Import React Libraries
import React from 'react';

// Import Context
import { useNav } from '../../context';

// Import compoment

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { StyledLink } from '../../utils/Styles';

// Import Colors
import colors from '../../utils/Colors';

// Import constantes
import { responsiveWidth, headerHeight } from '../../utils/Constant';

const StyledUl = styled.ul`
  height: ${headerHeight}px;

    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    
    margin:0;
    background: ${colors.marineBlue};

    @media (max-width: ${responsiveWidth}px){
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
  }

  return (
    <div id='#SideNav'>
      <StyledUl open={openBurgerButton}>
            <StyledLi><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/Account" onClick={handleLinkClick}>Account</StyledLink></StyledLi>
        </StyledUl>
    </div>

  );
}

export default SideNav;
