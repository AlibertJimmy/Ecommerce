// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getTrendingItem } from '../../utils/Functions/trendingItemFunction';
import {
  ItemContainer,
  PictureContainer, ArticlePicture,
  ArticleDescription, StyledP
} from '../../utils/Style/TrendingSliderStyle';
import { StyledLink } from '../../utils/Styles';

// Import Style

function TrendingItem ({ itemCategory }) {
  const trendingItemList = getTrendingItem(itemCategory);
  return (
    <>
      {trendingItemList.map((item) => (
        <ItemContainer key={item.id} id='rowItem'>
          <StyledLink
            onClick={() => window.top(0, 0)}
            to={`/${itemCategory}/${item.subCategory}/${item.id}`}
          >
            <PictureContainer id='itemHeader'>
              <ArticlePicture src={item.illustrations[0].picture} alt='product' />
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
  itemCategory: PropTypes.string.isRequired
};

export default TrendingItem;
