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
import colors from '../../utils/Colors';
import { IllustrationContainer, ItemPicture, PictureDisplayer, PictureSelectionPreview, PictureSelectionPreviewContainer, PictureSelector } from '../../utils/Style/ItemDetailStyle';

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 50px;
`;

const ItemPresentation = styled.div`
  margin: 5px 10px;
  width: auto;

  display:flex;
  flex-direction: row;

  border: 0px solid black;
  border-radius: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 50px;
`;

const ItemTitle = styled.h1`
  font-family: sans-serif;
  color: ${colors.orangeCustom};
  margin: 0;
`;

const ItemDatas = styled.div`

`;

const StyledUl1 = styled.ul`
  display: flex;  
  flex-direction: column;
  gap: 20px;
  padding:0;

  list-style: none;

  font-family: sans-serif;
  font-weight: 600 ;
  font-size: 20px;
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

const DescriptionContainer = styled.div`

`;

const StyledUl2 = styled.ul`

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

  const [image, setImage] = useState(itemList[index].illustrations[0].picture);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const [amount, updateAmount] = useState(1);
  return (
      <PageWrapper>
        <PageContainer>
          <ItemPresentation key={index} >
            <IllustrationContainer>
              <PictureDisplayer>
                <ItemPicture src={image} alt='picture1'></ItemPicture>
              </PictureDisplayer>
              <PictureSelector>
              {itemList[index].illustrations.map((liComponent, indexIllus) => (
                <PictureSelectionPreviewContainer key={`${itemList[index].name}-li-${indexIllus}`}>
                    <PictureSelectionPreview src={liComponent.picture} alt={`Picture${indexIllus}`} onMouseOver={changeImage}></PictureSelectionPreview>
                </PictureSelectionPreviewContainer>
              ))}
              </PictureSelector>
            </IllustrationContainer>
            <InfoContainer>
              <ItemDatas>
                <ItemTitle>{itemList[index].name}</ItemTitle>
                <StyledUl1>
                  <li><p style={{ fontStyle: 'italic' }}> {itemList[index].brand} </p></li>
                  <li><p> {itemList[index].weight} </p></li>
                  <li>
                    <p style={{ color: `${colors.greenCustom}`, fontSize: '25px' }}>
                     {itemList[index].price} €
                    </p>
                  </li>
                </StyledUl1>
              </ItemDatas>
              <QuantitySelectorWrapper>
                  <QuantityButton onClick={() => decreaseSelection(amount, updateAmount)}>-</QuantityButton>
                  <QuantityP>{amount}</QuantityP>
                  <QuantityButton onClick={() => increaseSelection(amount, updateAmount)}>+</QuantityButton>
                  <AddToCartButton onClick={() => addToCart(cart, updateCart, itemList[index], amount)}>Add To Cart</AddToCartButton>
              </QuantitySelectorWrapper>
            </InfoContainer>
          </ItemPresentation>
          <DescriptionContainer>
            <ItemTitle>Description</ItemTitle>
            {itemList[index].description.map((liComponent, indexDescr) => (
                    <p key={`${itemList[index].name}-li-${indexDescr}`}>{liComponent.li}</p>
            ))}
            <ItemTitle>Characteristic</ItemTitle>
            <StyledUl2>
                {itemList[index].characteristic.map((liComponent, indexCharac) => (
                    <li key={`${itemList[index].name}-li-${indexCharac}`}><p>{liComponent.li}</p></li>
                ))}
            </StyledUl2>
          </DescriptionContainer>
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
