// Import React Libraries
import React from 'react';

// Import Context
import { useCart } from '../../context';

// Import Function
import { itemQuantity } from '../../utils/CartFunctions/Functions';

// Import Assets
import emptyCart from '../../assets/Functionnal_Icon/Empty_Cart.png';

// Import Style
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { CommonButton, CommonQuantitySelectorStyle } from '../../utils/Styles';
import { zIndexCart } from '../../utils/Constant';

const CartContentWrapper = styled.div`
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

const StyledH2 = styled.h2`
    margin:0;
    font-family: sans-serif;

`;

const CartContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height: 100%;

`;

const CartContentContainer = styled.div`
    display: flex;
    margin: 20px 0 ;
`;

const CartItemDataDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;
`;

const TitleAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledP = styled.p`
    font-family: sans-serif;
    margin: 10px 10px 10px 5px;
`;

const CartImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100px;
`;

const CartItemImagePreview = styled.img`
    max-height: 100px;
    max-width: 100px;
`;

const QuantitySelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const QuantitySelectorContainer = styled.div`
    display: flex;
`;

const QuantityButton = styled.button`
  ${CommonButton};
  font-weight: bold;
  width: 25px;
`;

const QuantityP = styled.p`
  ${CommonQuantitySelectorStyle};
  width: 45px;
`;
const BottomCartWrapper = styled.div`
  border-top: 2px dashed black;
  margin: 20px 0;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const EmptyCartButton = styled.button`
  ${CommonButton};
`;

const EmptyCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const EmptyCartIMG = styled.img`
    height: 150px;
    width: 150px;
`;

function Cart () {
  const { isOpen, setIsOpen, cart, updateCart } = useCart();
  if (!cart) {
    return null;
  }
  const total = cart.reduce(
    (acc, item) => {
      return acc + item.amount * item.itemProperty.price;
    },
    0
  );

  function increase (index) {
    console.log(`amount : ${cart[index].amount}`);
    const updatedCart = [...cart];
    updatedCart[index] = {
      ...cart[index],
      amount: cart[index].amount + 1
    };
    updateCart(updatedCart);
  }

  function decrease (index) {
    console.log(`amount : ${cart[index].amount}`);
    const updatedCart = [...cart];
    if (updatedCart[index].amount > 1) {
      updatedCart[index] = {
        ...cart[index],
        amount: cart[index].amount - 1
      };
      updateCart(updatedCart);
    } else {
      removeFromCart(index);
    }
  }

  function removeFromCart (index) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  return (
      <CartContentWrapper isOpen={ isOpen } id='cartWrapper'>
        <StyledH2>Cart ({itemQuantity(cart)})</StyledH2>
        <CloseButton />
          {cart.length > 0
            ? (
            <CartContainer>
              <div>
                {cart.map(({ itemProperty, amount }, index) => (
                  <CartContentContainer key={`${itemProperty.name}-${index}`}>
                    <CartImageContainer>
                      <CartItemImagePreview src={itemProperty.illustrations[0].picture}></CartItemImagePreview>
                    </CartImageContainer>
                    <CartItemDataDisplay>
                      <TitleAndPrice>
                        <StyledP>{itemProperty.name}</StyledP>
                        <StyledP style={{ fontWeight: 'bold' }}>{itemProperty.price}€</StyledP>
                      </TitleAndPrice>
                      <QuantitySelectorWrapper>
                        <QuantitySelectorContainer>
                          <QuantityButton onClick={() => decrease(index)}>-</QuantityButton>
                          <QuantityP>{amount}</QuantityP>
                          <QuantityButton onClick={() => increase(index)}>+</QuantityButton>
                        </QuantitySelectorContainer>
                        <div>
                          <QuantityButton onClick={() => removeFromCart(index) } style={{ marginRight: '10px' }}>X</QuantityButton>
                        </div>
                    </QuantitySelectorWrapper>
                    </CartItemDataDisplay>
                  </CartContentContainer>
                ))}
              </div>
              <BottomCartWrapper>
                <CenterContainer>
                  <EmptyCartButton onClick={() => updateCart([])}>Empty the cart</EmptyCartButton>
                </CenterContainer>
                <CenterContainer>
                  <StyledH2>Total : {total} €</StyledH2>
                </CenterContainer>
                <CenterContainer>
                  <EmptyCartButton>Go To Checkout</EmptyCartButton>
                </CenterContainer>
              </BottomCartWrapper>
            </CartContainer>
              )
            : (
            <EmptyCartWrapper>
              <CenterContainer>
                <EmptyCartIMG src={emptyCart} alt='emptyCart'></EmptyCartIMG>
              </CenterContainer>
              <CenterContainer>
                <StyledH2>Your cart is empty</StyledH2>
              </CenterContainer>
              <CenterContainer>
                  <EmptyCartButton onClick={() => setIsOpen(false)}>Keep Browsing</EmptyCartButton>
                </CenterContainer>
            </EmptyCartWrapper>
              )}
    </CartContentWrapper>
  );
}

export default Cart;
