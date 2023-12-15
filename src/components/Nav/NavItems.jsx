// Import React Libraries
import React from 'react';

// Import Context
import { useNav } from '../../context';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Functions

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import constantes
import { responsiveWidthTablet, headerHeight } from '../../utils/Constant';

const StyledUl = styled.ul`
  height: ${headerHeight}px;

    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    z-index:25;
    
    padding:0;
    margin:0;
    background: ${colors.marineBlue};

    @media (max-width: ${responsiveWidthTablet}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 120px;
        right: 0;
        height: 100vh;
        width: 100px;
        padding: 0 3rem;
        align-items: stretch;
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
function NavItems () {
  const { openBurgerButton, setOpenBurgerButton } = useNav();

  const dropDownTitle1 = 'Shelter';
  const links1 = ['Shelter/SingleWall', 'Shelter/DoubleWall', 'Shelter/Accessory'];
  const linksRender1 = ['Single Wall', 'Double Wall', 'Accessory'];

  const dropDownTitle2 = 'Bedding';
  const links2 = ['Bedding/SleepingBag', 'Bedding/Mattress', 'Bedding/Hammock'];
  const linksRender2 = ['SleepingBag', 'Mattress', 'Hammock'];
  /*
  console.log('NavItems');
  console.log(`openBurgerButton : ${openBurgerButton}`);
  */

  return (
    <div id='#ItemNav'>
      <StyledUl open={openBurgerButton}>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle1} options={linksRender1} links={links1} handleCloseBurger={() => setOpenBurgerButton(false)}/></StyledLi>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle2} options={linksRender2} links={links2} handleCloseBurger={() => setOpenBurgerButton(false)}/></StyledLi>
        </StyledUl>
    </div>

  );
}

export default NavItems;
