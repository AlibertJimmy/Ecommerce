// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Assets
// import ArrowUp from '../../assets/Functionnal_Icon/arrowUp.png';

// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/Styles';

// Import Colors
import colors from '../../utils/Colors';

// Import Constants
import { footerHeight } from '../../utils/Constant';
import { StyledIcon } from '../../utils/Style/GlobalStyle';

const StyledFooter = styled.div`
    ${commonHeaderFooter};
    height: ${footerHeight}px;
    width: 100%;

    flex-direction: row;
    align-items:center;

    justify-content: space-between;

    color: ${colors.link};

    button#goToTopButton {
        background-color: transparent;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
      }
    border: 1px solid red;
`;

const StyledText = styled.div`
      display:flex;
      flex-direction: column;
      text-align:center;
`;

const StyledP = styled.p`
    font-size: 15px;
    margin: 5px;
`;

function Footer () {
  const handleGoToTop = () => {
    scrollToTop();
  };

  return (
    <StyledFooter id='#Footer'>
        <div></div>
        <StyledText>
            <StyledP>Copyright © 2023 OutdoorShop</StyledP>
        </StyledText>
        <div>
            <button id="goToTopButton" onClick={handleGoToTop}>
    <StyledIcon icon={faChevronUp}/>
            </button>
        </div>
    </StyledFooter>
  );
}

export default Footer;
