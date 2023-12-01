// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';
import { borderWidth, responsiveWidth } from './Constant';

export const PageWrapper = styled.div`

  margin-top: 50px;
  margin-bottom: 50px;
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

// Cart and Quantity Selector Buttons

export const CommonQuantitySelectorStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: 1px solid #8c8a89;
  color: black;
  font-size: 16px;
`;

export const CommonButton = css`
${CommonQuantitySelectorStyle};
cursor: pointer;

background: ${colors.lightGrey};

transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

&:hover {
  outline: 2px solid #b3aea2;
}
`;
