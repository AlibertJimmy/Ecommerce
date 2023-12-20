// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { scrollToTop } from '../../utils/Functions/globalFunctions';

// Import Style
import {
  ArticleSelectorWrapper, ArticleSelectorContainer,
  ArticlePresentation, ArticleDatas, ArticlePrice
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
    <ArticleSelectorWrapper id='articleSelectorWrapper'>
      <StyledTitleH1 style={{ margin: '20px 0' }}>{titleWrapper}</StyledTitleH1>
      <ArticleSelectorContainer id='itemSelectorContainer'>
        {itemList.map((item, index) => (

          <ArticlePresentation id='itemPresentation' key={index} >
            <StyledLinkShape key={index}
            to={`/${itemList[index].category}/${itemList[index].subCategory}/${itemList[index].id}`}
            onClick={handleOnClick}>
            <PictureContainerSelector>
              <ArticlePicturePreviewSelection src={item.illustrations[0].picture} alt='picture1'/>
            </PictureContainerSelector>
            <ArticleDatas>
              <StyledTitleH2>{item.name}</StyledTitleH2>
              <ArticlePrice>{item.price} €</ArticlePrice>
            </ArticleDatas>
            </StyledLinkShape>
          </ArticlePresentation>
        ))}
      </ArticleSelectorContainer>
    </ArticleSelectorWrapper>
  );
}

ItemSelector.propTypes = {
  itemList: PropTypes.array.isRequired,
  titleWrapper: PropTypes.string.isRequired
};

export default ItemSelector;
