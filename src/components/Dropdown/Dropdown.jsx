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
  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id='dropDownContainer'>
      <DropDownSpan id={`dropDownSpan${dropDownTitle}`}>{dropDownTitle}<DropDownStyledIcon icon={faChevronDown} /></DropDownSpan>
      <DropdownContent open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} >
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
