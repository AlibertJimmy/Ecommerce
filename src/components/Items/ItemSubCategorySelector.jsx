// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getItemSubCategoryList } from '../../utils/Functions/itemSubcategoryFunction';
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import { StyledTitleH2 } from '../../utils/Style/GlobalStyle';
import { SubCategorySelectorContainer, ItemPreviewContainer } from '../../utils/Style/ItemSubCategorySelectorStyle';
import { PictureContainer, ArticlePicturePreviewSelection, StyledLinkShape } from '../../utils/Style/PreviewStyle';

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
          <SubCategorySelectorContainer id='subCategorySelectorContainer'>
          {itemSubcategoryList.map((item, index) => (

              <ItemPreviewContainer key={index} id='itemPreviewContainer'>

                <StyledLinkShape key={index} to={`/${itemCategory}/${itemSubcategoryList[index].subCategory}`} onClick={handleOnClick} >
                <>
                <PictureContainer id='pictureContainer'>
                  <ArticlePicturePreviewSelection src={item.illustration} alt='picture1'/>
                </PictureContainer>
                <StyledTitleH2>{item.text}</StyledTitleH2>
                </>
                </StyledLinkShape>
              </ItemPreviewContainer>

          ))}
          </SubCategorySelectorContainer>
  );
}

ItemSubcategorySelector.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default ItemSubcategorySelector;
