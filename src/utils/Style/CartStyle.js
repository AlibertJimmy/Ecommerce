// Import Style
import styled from 'styled-components';
import { CommonButton, CommonQuantitySelectorStyle } from '../../utils/Styles';

// Import Constant
import { zIndexCart } from '../../utils/Constant';

export const StyledH2 = styled.h2`
    margin:0;
    font-family: sans-serif;

`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top:0;
  right: 0;

  height: 100%;

  color: black;
  background-color: white;
  margin:0;
  padding: 20px;
  
  justify-content: flex-start;
  width: 300px;
  z-index: ${zIndexCart};

  ${props =>
    props.isOpen
      ? `
      
      transform: translateX(0);
      `
      : `
      transform: translateX(100%);
      `}
`;

export const FilledCartWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height: 100%;

`;

export const CartContentContainer = styled.div`
    display: flex;
    margin: 20px 0 ;
`;

export const CartContentImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100px;
`;

export const CartContentImagePreview = styled.img`
    max-height: 100px;
    max-width: 100px;
`;

export const CartContentDataDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;
`;

export const CartContentPContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledP = styled.p`
    font-family: sans-serif;
    margin: 10px 10px 10px 5px;
`;

export const CartQuantitySelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartQuantitySelectorContainer = styled.div`
    display: flex;
`;

export const QuantityButton = styled.button`
  ${CommonButton};
  font-weight: bold;
  width: 25px;
`;

export const QuantityP = styled.p`
  ${CommonQuantitySelectorStyle};
  width: 45px;
`;
export const CartCheckOutWrapper = styled.div`
  border-top: 2px dashed black;
  margin: 20px 0;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const EmptyCartButton = styled.button`
  ${CommonButton};
`;

export const EmptyCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmptyCartIMG = styled.img`
    height: 150px;
    width: 150px;
`;
