// Import React Libraries
import React, { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { useCart } from '../../context';
import { usePreviewSliderContext } from '../../context/PreviewSliderContext';

// Import Components

// Import Functions
import { addToCart } from '../../utils/CartFunctions/Functions';
import { getItemCorrespondingToId, getItemList } from '../../utils/Functions/ItemFunctions';

// Import Style
import { StyledTitleH1 } from '../../utils/Style/GlobalStyle';
import {
  ItemDetailContainer,
  ItemPresentation,
  IllustrationContainer, PictureDisplayer, ItemDetailPicture,
  PictureSelector,
  InfoContainer, ItemDatas, StyledUlInfo,
  QuantitySelectorWrapper, QuantitySelectorContainer, QuantityButton, QuantityP, AddToCartButton,
  DescriptionContainer, StyledUlDescription
} from '../../utils/Style/ItemDetailStyle';

// Import Colors
import colors from '../../utils/Colors';
import PreviewSlider from '../Slider/PreviewSlider/PreviewSlider';
import { ButtonContainer, ScrollingButton, StyledIcon } from '../../utils/Style/PreviewSliderStyle';

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

function ItemDetail ({ itemCategory, itemSubCategory }) {
  const { pictureToDisplayIndex, setPictureToDisplayIndex } = usePreviewSliderContext();
  const { cart, updateCart } = useCart();
  const { id } = useParams();
  const itemList = getItemList(itemCategory, itemSubCategory);
  const index = getItemCorrespondingToId(id, itemList);

  const [image, setImage] = useState(itemList[index].illustrations[0].picture);
  const [amount, updateAmount] = useState(1);

  /*
  console.log('Item Detail Page');
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  console.log('itemList');
  console.log(itemList);
  console.log(`Index : ${index}`);
  console.log(itemList[index]);
  */
  const slideLeft = async () => {
    setPictureToDisplayIndex(pictureToDisplayIndex - 1);
  };

  const slideRight = async () => {
    setPictureToDisplayIndex(pictureToDisplayIndex + 1);
  };

  useEffect(() => {
    setPictureToDisplayIndex(0);
    console.log(`pictureToDisplayIndex : ${pictureToDisplayIndex}`);
  }, []);

  useEffect(() => {
    console.log('second useEffect');
    console.log(`pictureToDisplayIndex : ${pictureToDisplayIndex}`);

    if (pictureToDisplayIndex < itemList[index].illustrations.length - 1) {
      console.log('different from undefined');
      console.log(itemList[index].illustrations[pictureToDisplayIndex].picture);
      setImage(itemList[index].illustrations[pictureToDisplayIndex].picture);
    }
  }, [pictureToDisplayIndex]);

  return (
        <ItemDetailContainer id='pageContainer'>
          <ItemPresentation key={index} id='itemPresentation'>
            <IllustrationContainer id='illustrationContainer'>
              <PictureDisplayer id='pictureDisplayer'>
                <ButtonContainer id='scrollingButtonLeftContainer'>
                  {itemList[index].illustrations.length === 1
                    ? <></>
                    : <ScrollingButton id='scrollLeftButton' onClick={slideLeft}
                      style={{ display: pictureToDisplayIndex === 0 ? 'none' : undefined }}>
                        <StyledIcon icon={faChevronLeft} />
                      </ScrollingButton>}
                </ButtonContainer>
                  <ItemDetailPicture src={image} alt='picture1' id='itemPicture'></ItemDetailPicture>
                <ButtonContainer id='scrollingButtonRightContainer'>
                {itemList[index].illustrations.length === 1
                  ? <></>
                  : <ScrollingButton id='scrollRightButton' onClick={slideRight}
                    style={{ display: pictureToDisplayIndex === itemList[index].illustrations.length - 1 ? 'none' : undefined }}>
                      <StyledIcon icon={faChevronRight} />
                    </ScrollingButton>}
                </ButtonContainer>
              </PictureDisplayer>
              {
                itemList[index].illustrations.length <= 1
                  ? <></>
                  : <PictureSelector>
                      <PreviewSlider pictureList={itemList[index].illustrations} setImage={setImage}/>
                    </PictureSelector>
              }
            </IllustrationContainer>
            <InfoContainer id='infoContainer'>
              <ItemDatas id='itemDatas'>
                <StyledTitleH1 id='articleTitleName'>{itemList[index].name}</StyledTitleH1>
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
            <StyledTitleH1 id='articleTitleDescription'>Description</StyledTitleH1>
            {itemList[index].description.map((liComponent, indexDescr) => (
                    <p key={`${itemList[index].name}-li-${indexDescr}`}>{liComponent.li}</p>
            ))}
            <StyledTitleH1 id='articleTitleCharacteristic'>Characteristic</StyledTitleH1>
            <StyledUlDescription>
                {itemList[index].characteristic.map((liComponent, indexCharac) => (
                    <li key={`${itemList[index].name}-li-${indexCharac}`}><p>{liComponent.li}</p></li>
                ))}
            </StyledUlDescription>
          </DescriptionContainer>
        </ItemDetailContainer>
  );
}

ItemDetail.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ItemDetail;
