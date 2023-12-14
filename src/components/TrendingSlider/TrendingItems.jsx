// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getTrendingItem } from '../../utils/Functions/trendingItemFunction';

// Import Style
import styled from 'styled-components';

const elementWidth = '300px';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: sans-serif;
`;

const ItemContainer = styled.div`
  display: flex;

  height: auto;  
  width: ${elementWidth};

  outline: 2px solid rgba(0, 0, 0, .205);
  
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    outline: 2px solid rgba(0, 0, 0, .6);
  }
`;

const PictureContainer = styled.div`
  height: 150px;
  width: ${elementWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticlePicture = styled.img`
  max-height: 100px;
  max-width: ${elementWidth};
`;

const ArticleDescription = styled.div`
  width: ${elementWidth};
  font-size: 20px;
  display: flex;
  flex-direction : column;
  
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 5px;
`;

function TrendingItem ({ itemCategory }) {
  const trendingItemList = getTrendingItem(itemCategory);
  return (
    <>
      {trendingItemList.map((item) => (
        <ItemContainer key={item.id} id='rowItem'>
          <StyledLink
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
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
