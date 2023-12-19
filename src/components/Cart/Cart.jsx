// Import React Libraries
import React from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';

// Import Component
import CloseButton from './CloseButton';

// Import Function
import { itemQuantity } from '../../utils/CartFunctions/Functions';

// Import Assets
import emptyCart from '../../assets/Functionnal_Icon/Empty_Cart.png';

// Import Style
import {
  CartWrapper,
  FilledCartWrapper,
  CartContentContainer,
  CartContentImageContainer, CartContentImagePreview,
  CartContentDataDisplay, CartContentPContainer,
  CartQuantitySelectorWrapper, CartQuantitySelectorContainer, QuantityButton,
  CartCheckOutWrapper, CenterContainer, EmptyCartButton, EmptyCartIMG,
  EmptyCartWrapper, QuantityP, StyledH2, StyledP
} from '../../utils/Style/CartStyle';

function Cart () {
  const { isOpen, setIsOpen, cart, updateCart } = useCartContext();
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
    // console.log(`amount : ${cart[index].amount}`);
    const updatedCart = [...cart];
    updatedCart[index] = {
      ...cart[index],
      amount: cart[index].amount + 1
    };
    updateCart(updatedCart);
  }

  function decrease (index) {
    // console.log(`amount : ${cart[index].amount}`);
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
      <CartWrapper isOpen={ isOpen } id='cartWrapper'>
        <StyledH2>Cart ({itemQuantity(cart)})</StyledH2>
        <CloseButton />
          {cart.length > 0
            ? (
            <FilledCartWrapper id='cartFilledWrapper'>
              <div>
                {cart.map(({ itemProperty, amount }, index) => (
                  <CartContentContainer id={`cartContentContainer${itemProperty.name}`} key={`${itemProperty.name}-${index}`}>
                    <CartContentImageContainer id={`cartContentImageContainer${itemProperty.name}`}>
                      <CartContentImagePreview src={itemProperty.illustrations[0].picture} alt='imagePreview'/>
                    </CartContentImageContainer>
                    <CartContentDataDisplay id={`cartContentDataDisplay${itemProperty.name}`}>
                      <CartContentPContainer id={`cartContentPContainer${itemProperty.name}`}>
                        <StyledP>{itemProperty.name}</StyledP>
                        <StyledP style={{ fontWeight: 'bold' }}>{itemProperty.price}€</StyledP>
                      </CartContentPContainer>
                      <CartQuantitySelectorWrapper id={`cartQuantitySelectorWrapper${itemProperty.name}`}>
                        <CartQuantitySelectorContainer id={`cartQuantitySelectorContainer${itemProperty.name}`}>
                          <QuantityButton onClick={() => decrease(index)}>-</QuantityButton>
                          <QuantityP>{amount}</QuantityP>
                          <QuantityButton onClick={() => increase(index)}>+</QuantityButton>
                        </CartQuantitySelectorContainer>
                        <div>
                          <QuantityButton onClick={() => removeFromCart(index) } style={{ marginRight: '10px' }}>X</QuantityButton>
                        </div>
                      </CartQuantitySelectorWrapper>
                    </CartContentDataDisplay>
                  </CartContentContainer>
                ))}
              </div>
              <CartCheckOutWrapper id='cartCheckOutWrapper'>
                <CenterContainer>
                  <EmptyCartButton onClick={() => updateCart([])}>Empty the cart</EmptyCartButton>
                </CenterContainer>
                <CenterContainer>
                  <StyledH2>Total : {total} €</StyledH2>
                </CenterContainer>
                <CenterContainer>
                  <EmptyCartButton>Go To Checkout</EmptyCartButton>
                </CenterContainer>
              </CartCheckOutWrapper>
            </FilledCartWrapper>
              )
            : (
            <EmptyCartWrapper id='emptyCartWrapper'>
              <CenterContainer>
                <EmptyCartIMG src={emptyCart} alt='emptyCart'/>
              </CenterContainer>
              <CenterContainer>
                <StyledH2>Your cart is empty</StyledH2>
              </CenterContainer>
              <CenterContainer>
                <EmptyCartButton onClick={() => setIsOpen(false)}>Keep Browsing</EmptyCartButton>
              </CenterContainer>
            </EmptyCartWrapper>
              )}
    </CartWrapper>
  );
}

export default Cart;
