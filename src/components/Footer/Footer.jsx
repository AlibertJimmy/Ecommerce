// Import React Libraries
import React from 'react';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Assets
import ArrowUp from '../../assets/Functionnal_Icon/arrowUp.png';

// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/Styles';

// Import Colors
import colors from '../../utils/Colors';

// Import Constants
import { footerHeight } from '../../utils/Constant';

const StyledFooter = styled.div`
    ${commonHeaderFooter};
    height: ${footerHeight}px;

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
            <img src={ArrowUp} alt='arrowUp' style={{ height: '20px', width: '20px' }}></img>
            </button>
        </div>
    </StyledFooter>
  );
}

export default Footer;
