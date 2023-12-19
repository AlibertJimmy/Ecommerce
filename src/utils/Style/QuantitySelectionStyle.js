// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constant
import { responsiveWidthMobile, responsiveWidthTablet } from '../Constant';

// Cart and Quantity Selector Buttons

const CommonQuantitySelectorStyle = css`
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

const CommonButton = css`
  ${CommonQuantitySelectorStyle};
  cursor: pointer;

  background: ${colors.lightGrey};

  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    outline: 2px solid #b3aea2;
  }
`;

//
export const QuantityButton = styled.button`
  ${CommonButton};
  font-weight: bold;
  width: 25px;
`;

export const EmptyCartButton = styled.button`
  ${CommonButton};
`;

export const AddToCartButton = styled.button`
  ${CommonButton};

  @media (max-width: ${responsiveWidthTablet}px){
    margin-top: 10px;
  }
  
  @media (max-width: ${responsiveWidthMobile}px){
    margin-left: 15%;
    margin-top: 0;
    width: 100px;
  }
`;

export const QuantityP = styled.p`
  ${CommonQuantitySelectorStyle};
  width: 45px;
`;
