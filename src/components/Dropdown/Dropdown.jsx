// Import React Component
import React, { useState } from 'react';

// Import PropStyles
import PropTypes from 'prop-types';

// Import Assets
import ArrowDown from '../../assets/Functionnal_Icon/arrowDown.png';

// Import Style
import styled from 'styled-components';
import { StyledLinkDropDown, StyledSpanHeader } from '../../utils/Styles';
import { scrollToTop } from '../../utils/Functions';

// Styled components
const DropdownContainer = styled.div`

`;

const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropDownArrow = styled.img`
  width: 10px;
  height:10px;
  padding:0;
  margin:0;
`;

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
    scrollToTop();
    handleCloseBurger();
  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id='dropDown'>
      <StyledSpanHeader>{dropDownTitle}</StyledSpanHeader><DropDownArrow src={ArrowDown} alt="ArrowDown" style={{ paddingLeft: '5px' }}/>
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
