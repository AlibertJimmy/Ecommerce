// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constants
import { responsiveWidthTablet } from '../Constant';

const commonWriting = css`
  font-family:  sans-serif;
  font-weight:bold;

  @media (max-width: ${responsiveWidthTablet}px){
    color: ${colors.linkResponsive};
  }
`;

const commonLink = css`
    
  text-decoration: none;

  &:hover {
    color: ${colors.linkHover};
  }
`;

export const StyledSpanHeader = styled.span`
  ${commonWriting};
`;

export const StyledLink = styled(Link)`
    ${commonWriting};
    ${commonLink};
    color:inherit;
`;

export const StyledLinkDropDown = styled(Link)`
    ${commonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`;

export const StyledTitleH1 = styled.h1`
  font-family: sans-serif;
  color: ${colors.orangeCustom};
  margin: 0;
`;

export const StyledTitleH2 = styled.h2`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 200;
`;
