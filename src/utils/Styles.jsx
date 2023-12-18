// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';

// Import Constants
import { borderWidth, responsiveWidthMobile, responsiveWidthTablet } from './Constant';

export const PageWrapper = styled.div`

  margin: 120px 20px 2% 20px;
  min-height: 400px;
  border: 1px solid green;

  @media (max-width: ${responsiveWidthTablet}px){
    margin: 120px 15px 2% 15px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    margin: 120px 10px 2% 10px;
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
