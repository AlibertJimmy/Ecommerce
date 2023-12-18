// Import React Component
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Import PropStyles
import PropTypes from 'prop-types';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style

import { StyledLinkDropDown } from '../../utils/Style/GlobalStyle';
import {
  DropdownContainer,
  DropDownSpan, DropDownStyledIcon,
  DropdownContent, DropdownItem
} from '../../utils/Style/DropDownStyle';

// Styled components

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
    scrollToTop();
    handleCloseBurger();
    console.log('handleOptionClick');
  };

  const handleOnMouseEnter = () => {
    setIsOpen(true);
    console.log('handleOnMouseEnter');
  };

  const handleOnMouseLeave = () => {
    setIsOpen(false);
    console.log('handleOnMouseLeave');
  };

  const handleOnClick = () => {
    // setIsOpen(!isOpen);
    setIsOpen(true);
    console.log('handleOnClick');
    console.log(`isOpen : ${isOpen}`);
  };

  return (
    <DropdownContainer onMouseEnter={() => handleOnMouseEnter()} onMouseLeave={() => handleOnMouseLeave()} onClick={() => handleOnClick()}id='dropDownContainer'>
      <DropDownSpan id={`dropDownSpan${dropDownTitle}`}>{dropDownTitle}<DropDownStyledIcon icon={faChevronDown} /></DropDownSpan>
      <DropdownContent id={`dropDownContent${dropDownTitle}`} open={isOpen}>
        {console.log(`DropdownContent isOpen : ${isOpen}`)}
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
