// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import Constants
import { responsiveWidthTablet, zIndexCartButton, zIndexCart, zIndexCartCloseButton } from '../../utils/Constant';

// Cart Display

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
    props.cartState
      ? `
      
      transform: translateX(0);
      `
      : `
      transform: translateX(100%);
      `
  }
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

export const CartQuantitySelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartQuantitySelectorContainer = styled.div`
    display: flex;
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

export const EmptyCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmptyCartIMG = styled.img`
    height: 150px;
    width: 150px;
`;

// Cart Open Button

export const CartButtonWrapper = styled.div`
  display:flex;
  height: 25px;

  @media (max-width: ${responsiveWidthTablet}px){
    margin-right: 50px;
  }
`;

export const OpenCartButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  z-index: ${zIndexCartButton};
  color: white;
  position: relative;

  display: ${({ burgerButtonState }) => burgerButtonState ? 'none' : 'inline-block'};

  &::after {

    ${props => (props.amount > 0
    ? `
    display: flex;
    justify-content: center;
    content: '${props.amount}';
    background-color: ${colors.orangeCustom};;
    `
    : `
    content: '';
    background-color: transparent;
    `)}

    position: absolute;
    top: -12px;
    left: 15px;
    color: white;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 12px;
    
    display: flex;
    align-items: center;
    text-align: center;
    width: 10px;
    height: 10px;
  }
`;
export const CartIcon = styled.img`
    width: 25px;
    height:25px;
`;

// Cart Close Button

export const ClosingCross = styled.div`
    width: 2rem;
    height: 2rem;
    
    position:fixed;
    top: 17px;
    right: 10px;
    
    border-radius: 5px;
    padding: 2px;

    z-index: ${zIndexCartCloseButton};

    cursor: pointer;

    color: black;

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        background-color: black;

        &:nth-child(1){
            transform: translate(14%, 65%) rotate(45deg);
        }

        &:nth-child(2){
            transform: translate(14%, 500%) rotate(-45deg);
        }
    }
`;
