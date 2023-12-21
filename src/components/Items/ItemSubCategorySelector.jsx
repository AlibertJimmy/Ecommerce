// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getItemSubCategoryList } from '../../utils/Functions/itemSubcategoryFunction';
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import { StyledTitleH2 } from '../../utils/Style/GlobalStyle';
import { ProductSubCategorySelectorContainer, ProductPreviewContainer } from '../../utils/Style/ItemSubCategorySelectorStyle';
import { PictureContainerSelector, ArticlePicturePreviewSelection, StyledLinkShape } from '../../utils/Style/PreviewStyle';

function ItemSubcategorySelector ({ itemCategory }) {
  const itemSubcategoryList = getItemSubCategoryList(itemCategory);
  /*
  console.log('itemSubcategoryList');
  console.log(itemSubcategoryList);
  */

  function handleOnClick () {
    scrollToTop();
  }

  return (
          <ProductSubCategorySelectorContainer id='productSubCategorySelectorContainer'>
          {itemSubcategoryList.map((item, index) => (

              <ProductPreviewContainer key={index} id='productPreviewContainer'>

                <StyledLinkShape key={index} to={`/${itemCategory}/${itemSubcategoryList[index].subCategory}`} onClick={handleOnClick} >
                <>
                <PictureContainerSelector id='pictureContainerSelector'>
                  <ArticlePicturePreviewSelection src={item.illustration} alt='picture1'/>
                </PictureContainerSelector>
                <StyledTitleH2>{item.text}</StyledTitleH2>
                </>
                </StyledLinkShape>
              </ProductPreviewContainer>

          ))}
          </ProductSubCategorySelectorContainer>
  );
}

ItemSubcategorySelector.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default ItemSubcategorySelector;
