// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Functions
import { getItemSubCategoryList } from '../../utils/Functions/itemSubcategoryFunction';

// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';
import { scrollToTop } from '../../utils/Functions';

const SubCategorySelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
  justify-content: center;
  @media (max-width: ${responsiveWidthTablet}px){
    justify-content: flex-start;
  }
`;

const ItemPresentation = styled.div`
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  display:flex;
  flex-direction: column;
  flex: 0 0 calc(23% - 10px);
  width: 250px;
  height: 200px;
  margin: 10px 16px;

  @media (max-width: ${responsiveWidthTablet}px){
    flex: 0 0 calc(45% - 10px);
  }
  @media (max-width: ${responsiveWidthMobile}px){
    flex: 1 0 calc(50% - 10px);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
`;

const ItemPicture = styled.img`
  max-width: 150px;
  max-height: 150px;

`;

const ItemTitle = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 150;
`;

const ItemDatas = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content:space-between;
  height: 100px;
`;

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
          <SubCategorySelectorContainer id='pageContainer'>
          {itemSubcategoryList.map((item, index) => (

            <ItemPresentation key={index} id='itemPresentation'>
              <StyledLink key={index} to={`/${itemCategory}/${itemSubcategoryList[index].subCategory}`} onClick={handleOnClick}>
              <PictureContainer id='pictureContainer'>
                <ItemPicture src={item.illustration} alt='picture1'></ItemPicture>
              </PictureContainer>
              <ItemDatas id='itemDatas'>
                <ItemTitle>{item.text}</ItemTitle>
              </ItemDatas>
              </StyledLink>
            </ItemPresentation>

          ))}
          </SubCategorySelectorContainer>
  );
}

ItemSubcategorySelector.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default ItemSubcategorySelector;
