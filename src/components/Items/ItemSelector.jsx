// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getItemList } from '../../utils/Functions/ItemFunctions';
import { scrollToTop } from '../../utils/Functions';

// Import Style
import {
  ItemSelectionWrapper, ItemSelectorContainer,
  ItemPresentation, ItemDatas, ItemPrice
} from '../../utils/Style/ItemSelectorStyle';
import { StyledTitleH2 } from '../../utils/Style/GlobalStyle';
import { ArticlePicturePreviewSelection, PictureContainer, StyledLinkShape } from '../../utils/Style/PreviewStyle';

function ItemSelector ({ itemCategory, itemSubCategory }) {
  const itemList = getItemList(itemCategory, itemSubCategory);
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
    <ItemSelectionWrapper>
    <ItemSelectorContainer id='itemSelectorContainer'>
      {itemList.map((item, index) => (

        <ItemPresentation id='itemPresentation' key={index} >
          <StyledLinkShape key={index} to={`/${itemCategory}/${itemSubCategory}/${itemList[index].id}`} onClick={handleOnClick}>
          <PictureContainer>
            <ArticlePicturePreviewSelection src={item.illustrations[0].picture} alt='picture1'></ArticlePicturePreviewSelection>
          </PictureContainer>
          <ItemDatas>
            <StyledTitleH2>{item.name}</StyledTitleH2>
            <ItemPrice>{item.price} €</ItemPrice>
          </ItemDatas>
          </StyledLinkShape>
        </ItemPresentation>
      ))}
    </ItemSelectorContainer>
    </ItemSelectionWrapper>
  );
}

ItemSelector.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemSelector;
