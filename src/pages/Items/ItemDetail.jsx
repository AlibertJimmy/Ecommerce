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
import { PageWrapper } from '../../utils/Styles';
import {
  PageContainer, ItemTitle,
  ItemPresentation,
  IllustrationContainer, PictureDisplayer, ItemPicture,
  PictureSelector, PictureSelectionPreviewContainer, PictureSelectionPreview,
  InfoContainer, ItemDatas, StyledUlInfo,
  QuantitySelectorWrapper, QuantitySelectorContainer, QuantityButton, QuantityP, AddToCartButton,
  DescriptionContainer, StyledUlDescription
} from '../../utils/Style/ItemDetailStyle';

// Import Colors
import colors from '../../utils/Colors';

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
                <StyledUlInfo>
                  <li><p style={{ fontStyle: 'italic' }}> {itemList[index].brand} </p></li>
                  <li><p> {itemList[index].weight} </p></li>
                  <li><p style={{ color: `${colors.greenCustom}`, fontSize: '25px', marginBottom: '0' }}>{itemList[index].price} €</p></li>
                </StyledUlInfo>
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
            <StyledUlDescription>
                {itemList[index].characteristic.map((liComponent, indexCharac) => (
                    <li key={`${itemList[index].name}-li-${indexCharac}`}><p>{liComponent.li}</p></li>
                ))}
            </StyledUlDescription>
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
