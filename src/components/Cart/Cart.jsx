// Import React Libraries
import React from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';

// Import Component
import CartCloseButton from './CartCloseButton';

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
  CartQuantitySelectorWrapper, CartQuantitySelectorContainer,
  CartCheckOutWrapper, CenterContainer, EmptyCartIMG,
  EmptyCartWrapper, StyledH2
} from '../../utils/Style/CartStyle';
import { QuantityButton, EmptyCartButton, QuantityP } from '../../utils/Style/QuantitySelectionStyle';
import { StyledP } from '../../utils/Style/GlobalStyle';

function Cart () {
  const { cartState, setCartState, cart, updateCart } = useCartContext();
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
      <CartWrapper cartState={ cartState } id='cartWrapper'>
        <StyledH2>Cart ({itemQuantity(cart)})</StyledH2>
        <CartCloseButton />
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
                        <StyledP style={{ margin: '10px 10px 10px 5px' }}>{itemProperty.name}</StyledP>
                        <StyledP style={{ fontWeight: 'bold', margin: '10px 10px 10px 5px' }}>{itemProperty.price}€</StyledP>
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
                <EmptyCartButton onClick={() => setCartState(false)}>Keep Browsing</EmptyCartButton>
              </CenterContainer>
            </EmptyCartWrapper>
              )}
    </CartWrapper>
  );
}

export default Cart;
