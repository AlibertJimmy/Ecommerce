// Import React Libraries
import React from 'react';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Style
import { StyledUlItems } from '../../utils/Style/NavStyle';

function NavItems () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();

  const dropDownTitle1 = 'Shelter';
  const links1 = ['Shelter/SingleWall', 'Shelter/DoubleWall', 'Shelter/Accessory'];
  const linksRender1 = ['Single Wall', 'Double Wall', 'Accessory'];

  const dropDownTitle2 = 'Bedding';
  const links2 = ['Bedding/SleepingBag', 'Bedding/Mattress', 'Bedding/Hammock'];
  const linksRender2 = ['SleepingBag', 'Mattress', 'Hammock', 'Accessory'];

  const dropDownTitle3 = 'Cooking';
  const links3 = ['Cooking/Cooking', 'Cooking/Stove'];
  const linksRender3 = ['Cooking', 'Stove'];

  const dropDownTitle4 = 'Portage';
  const links4 = ['Portage/Minus30L', 'Portage/Plus30L'];
  const linksRender4 = ['Minus30L', 'Plus30L'];

  return (
    <div id='itemSideNav'>
      <StyledUlItems burgerButtonState={burgerButtonState} id='productUl'>
            <li><Dropdown dropDownTitle ={dropDownTitle1} options={linksRender1} links={links1} handleCloseBurger={() => setBurgerButtonState(false)}/></li>
            <li><Dropdown dropDownTitle ={dropDownTitle2} options={linksRender2} links={links2} handleCloseBurger={() => setBurgerButtonState(false)}/></li>
            <li><Dropdown dropDownTitle ={dropDownTitle3} options={linksRender3} links={links3} handleCloseBurger={() => setBurgerButtonState(false)}/></li>
            <li><Dropdown dropDownTitle ={dropDownTitle4} options={linksRender4} links={links4} handleCloseBurger={() => setBurgerButtonState(false)}/></li>
        </StyledUlItems>
    </div>

  );
}

export default NavItems;
