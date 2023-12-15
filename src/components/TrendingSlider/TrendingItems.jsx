// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { StyledLink } from '../../utils/Style/GlobalStyle';
import { ItemContainer, ArticleDescription, StyledP } from '../../utils/Style/TrendingSliderStyle';
import { PictureContainer, ArticlePicturePreviewSelection } from '../../utils/Style/PreviewStyle';

// Import Style
function TrendingItem ({ itemCategory, trendingItemList }) {
  return (
    <>
      {trendingItemList.map((item) => (
        <ItemContainer key={item.id} id='rowItem'>
          <StyledLink
            onClick={() => window.top(0, 0)}
            to={`/${itemCategory}/${item.subCategory}/${item.id}`}
          >
            <PictureContainer id='itemHeader'>
              <ArticlePicturePreviewSelection src={item.illustrations[0].picture} alt='product' />
            </PictureContainer>
            <ArticleDescription id="itemDescription">
              <StyledP>{item.brand}</StyledP>
              <StyledP>{item.name}</StyledP>
              <StyledP>{item.price}€</StyledP>
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
