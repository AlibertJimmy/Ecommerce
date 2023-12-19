// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { StyledLink, StyledP } from '../../../utils/Style/GlobalStyle';
import { ItemContainer, ArticleDescription } from '../../../utils/Style/TrendingSliderStyle';
import { PictureContainer, ArticlePicturePreviewSelection } from '../../../utils/Style/PreviewStyle';

// Import Style
function TrendingItem ({ itemCategory, trendingItemList }) {
  return (
    <>
      {trendingItemList.map((item) => (
        <ItemContainer key={item.id} id='itemContainer'>
          <StyledLink
            onClick={() => window.top(0, 0)}
            to={`/${itemCategory}/${item.subCategory}/${item.id}`}
          >
            <PictureContainer id='pictureContainer'>
              <ArticlePicturePreviewSelection src={item.illustrations[0].picture} alt='product' />
            </PictureContainer>
            <ArticleDescription id="articleDescription">
              <StyledP style={{ margin: '5px 0px' }}>{item.brand}</StyledP>
              <StyledP style={{ margin: '5px 0px' }}>{item.name}</StyledP>
              <StyledP style={{ margin: '5px 0px' }}>{item.price}€</StyledP>
            </ArticleDescription>
          </StyledLink>
        </ItemContainer>
      ))}
    </>
  );
}

TrendingItem.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  trendingItemList: PropTypes.array.isRequired
};

export default TrendingItem;
