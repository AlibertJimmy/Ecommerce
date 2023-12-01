// Import React Libraries
import React from 'react';

// Import Context
import { useCart } from '../../context';

// Import Function
import { itemQuantity } from '../../utils/CartFunctions/Functions';

// Import Style
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { CommonButton, CommonQuantitySelectorStyle } from '../../utils/Styles';

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
  z-index: 99;

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

const CartItemImagePreview = styled.img`
    height: 100px;
    width: 100px;
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

const EmpltyCartButton = styled.button`
  ${CommonButton};
  margin-left: 0;
`;

function Cart () {
  const { isOpen, cart, updateCart } = useCart();
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
      <CartContentWrapper isOpen={ isOpen } id='CartWrapper'>
        <StyledH2>Cart ({itemQuantity(cart)})</StyledH2>
        <CloseButton />
          {cart.length > 0
            ? (
            <div>
              <div>
                {cart.map(({ itemProperty, amount }, index) => (
                  <CartContentContainer key={`${itemProperty.name}-${index}`}>
                    <CartItemImagePreview src={itemProperty.picture1}></CartItemImagePreview>
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
              <EmpltyCartButton onClick={() => updateCart([])}>Empty the cart</EmpltyCartButton>
              <h3>Total :{total}€</h3>
            </div>
              )
            : (
            <div>Your cart is empty</div>
              )}
    </CartContentWrapper>
  );
}

export default Cart;
