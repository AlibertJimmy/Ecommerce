// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Import Functions
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Assets
// import ArrowUp from '../../assets/Functionnal_Icon/arrowUp.png';

// Import Style
import { StyledIcon, StyledP } from '../../utils/Style/GlobalStyle';
import { StyledFooter, StyledText, StyledButton } from '../../utils/Style/FooterStyle';

// Import Constants

function Footer () {
  const handleGoToTop = () => {
    scrollToTop();
  };

  return (
    <StyledFooter id='footer'>
        <div></div>
        <StyledText>
            <StyledP>Copyright © 2023 OutdoorShop</StyledP>
        </StyledText>
        <div id='buttonContainer'>
            <StyledButton id="goToTopButton" onClick={handleGoToTop}>
              <StyledIcon icon={faChevronUp}/>
            </StyledButton>
        </div>
    </StyledFooter>
  );
}

export default Footer;
