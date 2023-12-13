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

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  border: 1px solid red;

  @media (max-width: ${responsiveWidthTablet}px){
    margin: 0 10px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    justify-content: center;
    margin: 0 10px;
  }
`;

const ItemPresentation = styled.div`
  margin: 5px 10px;
  width: auto;

  display:flex;
  flex-direction: row;

  border-radius: 15px;
  border: 1px solid black;

  @media (max-width: ${responsiveWidthTablet}px){

  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column-reverse;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;

  @media (max-width: ${responsiveWidthTablet}px){
    padding: 25px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    padding: 25px;
  }
`;

const ItemTitle = styled.h1`
  font-family: sans-serif;
  color: ${colors.orangeCustom};
  margin: 0;
`;

const ItemDatas = styled.div`
  display: flex;
  flex-direction: column;

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

  @media (max-width: ${responsiveWidthTablet}px){
    gap: 0;

    li {
      margin: 0;
      p{
        margin: 10px;
      }
    }
  }
`;

const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${responsiveWidthTablet}px){
    margin-top:0;
    flex-direction: column;
    align-items: start;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: row;
    align-items: center;
  }
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

const AddToCartButton = styled.button`
  ${CommonButton};

  @media (max-width: ${responsiveWidthTablet}px){
    margin-top: 10px;
  }
  
  @media (max-width: ${responsiveWidthMobile}px){
    margin-left: 15%;
    margin-top: 0;
    width: 100px;
  }
`;

const DescriptionContainer = styled.div`
  @media (max-width: ${responsiveWidthTablet}px){
    margin: 5%;
  }
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
  const itemList = getItemList(itemCategory, itemSubCategory);
  /*
  console.log('Item Detail Page');
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  console.log('itemList');
  console.log(itemList);
  console.log(`Index : ${index}`);
  console.log(itemList[index]);
  */

  const [image, setImage] = useState(itemList[index].illustrations[0].picture);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const [amount, updateAmount] = useState(1);
  return (
      <PageWrapper id='pageWrapper'>
        <PageContainer id='pageContainer'>
          <ItemPresentation key={index} id='itemPresentation'>
            <IllustrationContainer id='illustrationContainer'>
              <PictureDisplayer id='pictureDisplayer'>
                <ItemPicture src={image} alt='picture1' id='itemPicture'></ItemPicture>
              </PictureDisplayer>
              {
                itemList[index].illustrations.length > 1
                  ? <PictureSelector>
                {itemList[index].illustrations.map((liComponent, indexIllus) => (
                  <PictureSelectionPreviewContainer key={`${itemList[index].name}-li-${indexIllus}`}>
                      <PictureSelectionPreview src={liComponent.picture} alt={`Picture${indexIllus}`} onMouseOver={changeImage}></PictureSelectionPreview>
                  </PictureSelectionPreviewContainer>
                ))}
                </PictureSelector>
                  : <></>
              }
            </IllustrationContainer>
            <InfoContainer id='infoContainer'>
              <ItemDatas id='itemDatas'>
                <ItemTitle>{itemList[index].name}</ItemTitle>
                <StyledUl1>
                  <li><p style={{ fontStyle: 'italic' }}> {itemList[index].brand} </p></li>
                  <li><p> {itemList[index].weight} </p></li>
                  <li>
                    <p style={{ color: `${colors.greenCustom}`, fontSize: '25px', marginBottom: '0' }}>
                     {itemList[index].price} €
                    </p>
                  </li>
                </StyledUl1>
              </ItemDatas>
              <QuantitySelectorWrapper>
                  <QuantitySelectorContainer>
                    <QuantityButton onClick={() => decreaseSelection(amount, updateAmount)}>-</QuantityButton>
                    <QuantityP>{amount}</QuantityP>
                    <QuantityButton onClick={() => increaseSelection(amount, updateAmount)}>+</QuantityButton>
                  </QuantitySelectorContainer>
                  <div>
                    <AddToCartButton onClick={() => addToCart(cart, updateCart, itemList[index], amount)}>Add To Cart</AddToCartButton>
                  </div>
              </QuantitySelectorWrapper>
            </InfoContainer>
          </ItemPresentation>
          <DescriptionContainer id='descriptionContainer'>
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
