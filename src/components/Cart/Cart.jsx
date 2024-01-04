// Import React Libraries
import React, { useEffect } from 'react';

// Import Context
import { useCartContext } from '../../context/CartContext';

// Import Component
import CartCloseButton from './CartCloseButton';

// Import Function
import { itemQuantity } from '../../utils/Functions/cartFunctions';

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
  EmptyCartWrapper
} from '../../utils/Style/CartStyle';
import { QuantityButton, EmptyCartButton, QuantityP } from '../../utils/Style/QuantitySelectionStyle';
import { StyledP, StyledTitleH2 } from '../../utils/Style/GlobalStyle';

function Cart () {
  const { cartState, setCartState, cart, updateCart } = useCartContext();
  if (!cart) {
    return null;
  }

  useEffect(() => {
    console.log(`cartState : ${cartState}`);
  }, [cartState]);

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
        <StyledTitleH2>Cart ({itemQuantity(cart)})</StyledTitleH2>
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
                        <StyledP style={{ fontWeight: 'bold', margin: '10px 10px 10px 5px' }}>{itemProperty.price.toFixed(2)}€</StyledP>
                      </CartContentPContainer>
                      <CartQuantitySelectorWrapper id={`cartQuantitySelectorWrapper${itemProperty.name}`}>
                        <CartQuantitySelectorContainer id={`cartQuantitySelectorContainer${itemProperty.name}`}>
                          {/* QuantityButton ids are important because they areconsidered in the function isCartButton to avoid closing the cart when the item is removed from cart */}
                          <QuantityButton id='cartMinusProductButton' onClick={() => decrease(index)}>-</QuantityButton>
                          <QuantityP>{amount}</QuantityP>
                          <QuantityButton id='cartPlusProductButton' onClick={() => increase(index)}>+</QuantityButton>
                        </CartQuantitySelectorContainer>
                        <div>
                          <QuantityButton id='cartRemoveProductButton' onClick={() => removeFromCart(index) } style={{ marginRight: '10px' }}>X</QuantityButton>
                        </div>
                      </CartQuantitySelectorWrapper>
                    </CartContentDataDisplay>
                  </CartContentContainer>
                ))}
              </div>
              <CartCheckOutWrapper id='cartCheckOutWrapper'>
                <CenterContainer>
                  <EmptyCartButton id='cartEmptyProductButton' onClick={() => updateCart([])}>Empty the cart</EmptyCartButton>
                </CenterContainer>
                <CenterContainer>
                  <StyledTitleH2>Total : {total.toFixed(2)} €</StyledTitleH2>
                </CenterContainer>
                <CenterContainer>
                  <EmptyCartButton onClick={() => setCartState(false)}>Go To Checkout</EmptyCartButton>
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
                <StyledTitleH2>Your cart is empty</StyledTitleH2>
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
