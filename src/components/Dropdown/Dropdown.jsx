// Import React Component
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Import PropStyles
import PropTypes from 'prop-types';

// Import Function
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style

import { StyledLinkDropDown } from '../../utils/Style/GlobalStyle';
import {
  DropdownContainer,
  DropDownSpan, DropDownStyledIcon,
  DropdownContent, DropdownItem
} from '../../utils/Style/DropDownStyle';

// Styled components

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger }) {
  const [dropDownState, setDropDownState] = useState(false);

  const handleOptionClick = () => {
    setDropDownState(false);
    scrollToTop();
    handleCloseBurger();
    // console.log('handleOptionClick');
  };

  const handleOnMouseEnter = () => {
    setDropDownState(true);
    // console.log('handleOnMouseEnter');
  };

  const handleOnMouseLeave = () => {
    setDropDownState(false);
    // console.log('handleOnMouseLeave');
  };

  const handleOnClick = () => {
    setDropDownState(!dropDownState);
    // console.log('handleOnClick');
    // console.log(`dropDownState : ${dropDownState}`);
  };

  return (
    <DropdownContainer onMouseEnter={() => handleOnMouseEnter()} onMouseLeave={() => handleOnMouseLeave()} id='dropDownContainer'>
      <DropDownSpan id={`dropDownSpan${dropDownTitle}`} onClick={() => handleOnClick()}>{dropDownTitle}<DropDownStyledIcon icon={faChevronDown} /></DropDownSpan>
      <DropdownContent id={`dropDownContent${dropDownTitle}`} open={dropDownState}>
        {options.map((option, index) => (
          <DropdownItem key={index} id={`dropdownItem${option}`}>
            <StyledLinkDropDown key={index} to={`/${links[index]}`} onClick={() => handleOptionClick(links[index])}>{option}</StyledLinkDropDown>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  dropDownTitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default Dropdown;
