// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

// Import Functions
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Assets
// import ArrowUp from '../../assets/Functionnal_Icon/arrowUp.png';

// Import Style
import { StyledIcon, StyledP } from '../../utils/Style/GlobalStyle';
import { StyledFooter, StyledText, StyledButton } from '../../utils/Style/FooterStyle';

// Import Constants

function Footer () {
  const currentYear = format(new Date(), 'yyyy');
  const handleGoToTop = () => {
    scrollToTop();
  };

  return (
    <StyledFooter id='footer'>
        <div></div>
        <StyledText>
            <StyledP>Copyright © {currentYear} All rights reserved.</StyledP>
        </StyledText>
        <div id='scrollToTopButtonContainer'>
            <StyledButton id="scrollToTopButton" onClick={handleGoToTop}>
              <StyledIcon icon={faChevronUp}/>
            </StyledButton>
        </div>
    </StyledFooter>
  );
}

export default Footer;
