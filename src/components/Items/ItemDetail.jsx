// Import React Libraries
import React, { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { useCartContext } from '../../context/CartContext';
import { usePreviewSliderContext } from '../../context/PreviewSliderContext';

// Import Components
import PreviewSlider from '../Slider/PreviewSlider/PreviewSlider';

// Import Functions
import { addToCart } from '../../utils/Functions/cartFunctions';
import { displayPreviewSlider, getItemCorrespondingToId, getProductList } from '../../utils/Functions/ItemFunctions';

// Import Style
import { StyledIcon, StyledTitleH1 } from '../../utils/Style/GlobalStyle';
import { ButtonContainer, ScrollingButton } from '../../utils/Style/PreviewSliderStyle';
import { AddToCartButton, QuantityButton, QuantityP } from '../../utils/Style/QuantitySelectionStyle';
import {
  ProductDetailWrapper,
  ProductPresentationWrapper,
  PictureWrapper, PictureContainer, PictureDisplayer, ProductPicture,
  PictureSelector,
  ProductInfoWrapper, ProductInfoContainer, StyledUlInfo,
  QuantitySelectorWrapper, QuantitySelectorContainer,
  DescriptionContainer, StyledUlDescription
} from '../../utils/Style/ItemDetailStyle';

// Import Colors
import colors from '../../utils/Colors';

function increaseSelection (amount, updateAmount) {
  amount = amount + 1;
  updateAmount(amount);
  console.log('increaseSelection');
}

function decreaseSelection (amount, updateAmount) {
  if (amount > 1) {
    amount = amount - 1;
    updateAmount(amount);
    console.log('decreaseSelection');
  }
}

function ItemDetail ({ itemCategory, itemSubCategory }) {
  const { pictureToDisplayIndex, setPictureToDisplayIndex } = usePreviewSliderContext();
  const { cart, updateCart } = useCartContext();
  const { id } = useParams();
  const productList = getProductList(itemCategory, itemSubCategory);
  const index = getItemCorrespondingToId(id, productList);

  const [image, setImage] = useState(productList[index].illustrations[0].picture);
  const [amount, updateAmount] = useState(1);
  const [screenWidth, updatescreenWidth] = useState(window.innerWidth);

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

  const onQuantitySelectionWrapper = async () => {
    console.log('onQuantitySelectionWrapper click');
  };

  useEffect(() => {
    setPictureToDisplayIndex(0);
    updatescreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (pictureToDisplayIndex <= productList[index].illustrations.length - 1) {
      // console.log(itemList[index].illustrations[pictureToDisplayIndex].picture);
      setImage(productList[index].illustrations[pictureToDisplayIndex].picture);
      // console.log(`pictureToDisplayIndex : ${pictureToDisplayIndex}`);
    }
  }, [pictureToDisplayIndex]);

  return (
        <ProductDetailWrapper id='productDetailContainer'>
          <ProductPresentationWrapper key={index} id='productPresentationWrapper'>
            <PictureWrapper id='pictureWrapper'>
              <PictureDisplayer id='pictureDisplayer'>
                <ButtonContainer id='scrollingButtonLeftContainer'>
                  {productList[index].illustrations.length === 1
                    ? <></>
                    : <ScrollingButton id='scrollLeftButton' onClick={slideLeft}
                      style={{ display: pictureToDisplayIndex === 0 ? 'none' : undefined }}>
                        <StyledIcon icon={faChevronLeft} />
                      </ScrollingButton>}
                </ButtonContainer>
                  <PictureContainer id='pictureContainer'>
                    <ProductPicture src={image} alt='picture1' id='itemPicture'/>
                  </PictureContainer>
                <ButtonContainer id='scrollingButtonRightContainer'>
                  {productList[index].illustrations.length === 1
                    ? <></>
                    : <ScrollingButton id='scrollRightButton' onClick={slideRight}
                      style={{ display: pictureToDisplayIndex === productList[index].illustrations.length - 1 ? 'none' : undefined }}>
                        <StyledIcon icon={faChevronRight} />
                      </ScrollingButton>}
                </ButtonContainer>
              </PictureDisplayer>
              {
                displayPreviewSlider(productList[index].illustrations.length, screenWidth) === false
                  ? <></>
                  : <PictureSelector id='pictureSelector'>
                      <PreviewSlider pictureList={productList[index].illustrations} setImage={setImage}/>
                    </PictureSelector>
              }
            </PictureWrapper>
            <ProductInfoWrapper id='productInfoWrapper'>
              <ProductInfoContainer id='productInfoWrapper'>
                <StyledTitleH1 id='articleTitleName'>{productList[index].name}</StyledTitleH1>
                <StyledUlInfo>
                  <li><p style={{ fontStyle: 'italic' }}> {productList[index].brand} </p></li>
                  <li><p> {productList[index].weight} </p></li>
                  <li><p style={{ color: `${colors.greenCustom}`, fontSize: '25px', marginBottom: '0' }}>{productList[index].price.toFixed(2)} €</p></li>
                </StyledUlInfo>
              </ProductInfoContainer>
              <QuantitySelectorWrapper onClick={() => onQuantitySelectionWrapper()}>
                  <QuantitySelectorContainer>
                    <QuantityButton onClick={() => decreaseSelection(amount, updateAmount)}>-</QuantityButton>
                    <QuantityP>{amount}</QuantityP>
                    <QuantityButton onClick={() => increaseSelection(amount, updateAmount)}>+</QuantityButton>
                  </QuantitySelectorContainer>
                  <div>
                    <AddToCartButton onClick={() => addToCart(cart, updateCart, productList[index], amount)}>Add To Cart</AddToCartButton>
                  </div>
              </QuantitySelectorWrapper>
            </ProductInfoWrapper>
          </ProductPresentationWrapper>
          <DescriptionContainer id='descriptionContainer'>
            <StyledTitleH1 id='articleTitleDescription'>Description</StyledTitleH1>
            {productList[index].description.map((liComponent, indexDescr) => (
                    <p key={`${productList[index].name}-li-${indexDescr}`}>{liComponent.li}</p>
            ))}
            <StyledTitleH1 id='articleTitleCharacteristic'>Characteristics</StyledTitleH1>
            <StyledUlDescription>
                {productList[index].characteristic.map((liComponent, indexCharac) => (
                    <li key={`${productList[index].name}-li-${indexCharac}`}><p>{liComponent.li}</p></li>
                ))}
            </StyledUlDescription>
          </DescriptionContainer>
        </ProductDetailWrapper>
  );
}

ItemDetail.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemDetail;
