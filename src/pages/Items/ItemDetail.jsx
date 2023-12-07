// Import React Libraries
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { useCart } from '../../context';

// Import Components

// Import Functions
import { addToCart } from '../../utils/CartFunctions/Functions';
import { getItemList } from '../../utils/Functions/ItemFunctions';

// Import Style
import styled from 'styled-components';
import { CommonButton, CommonQuantitySelectorStyle, PageWrapper } from '../../utils/Styles';

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ItemPresentation = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  display:flex;
  flex: 1 0 calc(40% - 10px);
  width: 500px;
  margin: 5px 10px;

`;
const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border: 1px solid red;
`;

const ItemPicture = styled.img`
  max-width: 250px;
  max-height: 250px;

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

function ItemDetailPage ({ itemCategory, itemSubCategory }) {
  const { cart, updateCart } = useCart();
  const { index } = useParams();
  console.log('Item Detail Page');
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  const itemList = getItemList(itemCategory, itemSubCategory);
  console.log('itemList');
  console.log(itemList);
  console.log(`Index : ${index}`);
  console.log(itemList[index]);
  // cherche l'index correspondant au name pour l'afficher

  const [amount, updateAmount] = useState(1);
  return (
      <PageWrapper>
        <PageContainer>
          <ItemPresentation key={index} >
            <ItemTitle>{itemList[index].name}</ItemTitle>
            <PictureContainer>
              <ItemPicture src={itemList[index].picture1} alt='picture1'></ItemPicture>
            </PictureContainer>
            <ItemDatas>
              <ul>
                <li>{itemList[index].price} euros</li>
              </ul>
            </ItemDatas>
            <QuantitySelectorWrapper>
                <QuantityButton onClick={() => decreaseSelection(amount, updateAmount)}>-</QuantityButton>
                <QuantityP>{amount}</QuantityP>
                <QuantityButton onClick={() => increaseSelection(amount, updateAmount)}>+</QuantityButton>
                <AddToCartButton onClick={() => addToCart(cart, updateCart, itemList[index], amount)}>Add To Cart</AddToCartButton>
            </QuantitySelectorWrapper>
          </ItemPresentation>
        </PageContainer>
      </PageWrapper>
  );
}

ItemDetailPage.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ItemDetailPage;
