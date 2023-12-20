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
    margin: ${headerHeight + verticalMargin}px ${horizontalMarginTablet}px ${verticalMargin}px ${horizontalMarginTablet}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    margin: ${headerHeight + verticalMargin}px ${horizontalMarginMobile}px ${verticalMargin}px ${horizontalMarginMobile}px;
  }
  border: 1px solid red;
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
