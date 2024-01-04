// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import {
  ProductSelectorWrapper, ProductSelectorContainer,
  ProductPresentation, ProductDatasContainer, ProductPrice
} from '../../utils/Style/ItemSelectorStyle';

import { StyledTitleH1, StyledTitleH2 } from '../../utils/Style/GlobalStyle';
import { ArticlePicturePreviewSelection, PictureContainerSelector, StyledLinkShape } from '../../utils/Style/PreviewStyle';

function ItemSelector ({ itemList, titleWrapper }) {
  /*
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  console.log('itemList');
  console.log(itemList);
  */

  function handleOnClick () {
    scrollToTop();
  }

  return (
    <ProductSelectorWrapper id='productSelectorWrapper'>
      <StyledTitleH1 style={{ margin: '20px 0' }}>{titleWrapper}</StyledTitleH1>
      <ProductSelectorContainer id='productSelectorContainer'>
        {itemList.map((item, index) => (

          <ProductPresentation id='productPresentation' key={index} >
            <StyledLinkShape key={index}
            to={`/${itemList[index].category}/${itemList[index].subCategory}/${itemList[index].id}`}
            onClick={handleOnClick}>
            <PictureContainerSelector id='pictureContainerSelector'>
              <ArticlePicturePreviewSelection src={item.illustrations[0].picture} alt='picture1'/>
            </PictureContainerSelector>
            <ProductDatasContainer id='productDatasContainer'>
              <StyledTitleH2>{item.name}</StyledTitleH2>
              <ProductPrice>{item.price.toFixed(2)} €</ProductPrice>
            </ProductDatasContainer>
            </StyledLinkShape>
          </ProductPresentation>
        ))}
      </ProductSelectorContainer>
    </ProductSelectorWrapper>
  );
}

ItemSelector.propTypes = {
  itemList: PropTypes.array.isRequired,
  titleWrapper: PropTypes.string.isRequired
};

export default ItemSelector;
