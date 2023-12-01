// Import React Libraries
import React, { useState } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { useCart } from '../../../context';

// Import Components

// Import Functions
import { addToCart } from '../../../utils/CartFunctions/Functions';

// Import Datas
import { singleWallList } from '../../../datas/Shelter/SingleWall';

// Import Style
import styled from 'styled-components';
import { CommonButton, CommonQuantitySelectorStyle, PageWrapper } from '../../../utils/Styles';

const ItemPresentation = styled.div`
  border: 1px solid black;
  border-radius: 15px;

`;

const ItemPicture = styled.img`

`;

const ItemTitle = styled.h1`

`;

const ItemDatas = styled.p`

`;

const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;
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

const AddToCartButton = styled.button`
  ${CommonButton};
`;

function increaseSelection (amount, updateAmount) {
  amount = amount + 1;
  updateAmount(amount);
}

function decreaseSelection (amount, updateAmount) {
  if (amount > 1) {
    amount = amount - 1;
    updateAmount(amount);
  }
}

function ShelterSingleWall () {
  const { cart, updateCart } = useCart();

  console.log('ShelterSingleWall');
  console.log('cart');
  console.log(cart);
  const [amount, updateAmount] = useState(1);
  return (
      <PageWrapper>
        {singleWallList.map((item, index) => (
          <ItemPresentation key={index} >
            <ItemTitle>{item.name}</ItemTitle>
            <ItemPicture src={item.picture1} alt='picture1'></ItemPicture>
            <ItemDatas>
              <ul>
                <li>{item.price} euros</li>
              </ul>
            </ItemDatas>
            <QuantitySelectorWrapper>
                <QuantityButton onClick={() => decreaseSelection(amount, updateAmount)}>-</QuantityButton>
                <QuantityP>{amount}</QuantityP>
                <QuantityButton onClick={() => increaseSelection(amount, updateAmount)}>+</QuantityButton>
                <AddToCartButton onClick={() => addToCart(cart, updateCart, item, amount)}>Add To Cart</AddToCartButton>
            </QuantitySelectorWrapper>
          </ItemPresentation>
        ))}
      </PageWrapper>
  );
}

ShelterSingleWall.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default ShelterSingleWall;
