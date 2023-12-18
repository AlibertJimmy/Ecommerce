// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';

// Import Constants
import {
  borderWidth,
  headerHeight, footerHeight, verticalMargin, horizontalMargin, horizontalMarginTablet, horizontalMarginMobile,
  responsiveWidthMobile, responsiveWidthTablet
} from './Constant';

export const PageWrapper = styled.div`

  margin: ${headerHeight * 2 + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
  min-height: ${window.innerHeight - (headerHeight * 2 + verticalMargin * 2 + footerHeight)}px;

  @media (max-width: ${responsiveWidthTablet}px){
    margin: ${headerHeight * 2 + verticalMargin}px ${horizontalMarginTablet}px ${verticalMargin}px ${horizontalMarginTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    margin: ${headerHeight * 2 + verticalMargin}px ${horizontalMarginMobile}px ${verticalMargin}px ${horizontalMarginMobile}px;
  }
`;

export const ComponentBorder = css`
    border: ${borderWidth}px solid black;
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
