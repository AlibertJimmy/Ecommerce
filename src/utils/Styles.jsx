// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';
import { borderWidth, responsiveWidth } from './Constant';

export const PageWrapper = styled.div`

  margin-top: 250px;
`;

export const ComponentBorder = css`
    border: ${borderWidth}px solid black;
`;

const commonWriting = css`
  font-family:  sans-serif;
  font-weight:bold;

  @media (max-width: ${responsiveWidth}px){
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

// Header & Footer
export const commonHeaderFooter = css`
    ${ComponentBorder};
    display: flex;
    width: 100%;

    background: ${colors.marineBlue};
`;