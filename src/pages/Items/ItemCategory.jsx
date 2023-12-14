// Import React Libraries
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context

// Import Components
// import TrendingSlider from '../../components/TrendingSlider/TrendingSlider';

// Import Functions
import { getItemList } from '../../utils/Functions/ItemFunctions';

// Import Style
import styled from 'styled-components';
import { PageWrapper } from '../../utils/Styles';
import { displayOutlet } from '../../utils/Functions/pathFunctions';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';
import { scrollToTop } from '../../utils/Functions';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
`;

const ItemPresentation = styled.div`
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  display:flex;
  flex-direction: column;
  flex: 0 0 calc(23% - 10px);
  width: 250px;
  height: 250px;
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

const ItemPrice = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 22px;
  margin: 0;
`;

function ItemCategoryPage ({ itemCategory, itemSubCategory }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(`currentUrl : ${currentUrl}`);
  console.log('Product Page');
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  const itemList = getItemList(itemCategory, itemSubCategory);
  console.log('itemList');
  console.log(itemList);
  console.log(displayOutlet(itemCategory, itemSubCategory, currentUrl));
  const shouldDisplayPageContainer = displayOutlet(itemCategory, itemSubCategory, currentUrl);

  function handleOnClick () {
    scrollToTop();
  }

  return (
      <PageWrapper>
        {shouldDisplayPageContainer
          ? (
          <PageContainer id='pageContainer'>
            <SubCategoryContainer>
            {itemList.map((item, index) => (

              <ItemPresentation key={index} >
                <StyledLink key={index} to={`/${itemCategory}/${itemSubCategory}/${itemList[index].id}`} onClick={handleOnClick}>
                <PictureContainer>
                  <ItemPicture src={item.illustrations[0].picture} alt='picture1'></ItemPicture>
                </PictureContainer>
                <ItemDatas>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemPrice>{item.price} €</ItemPrice>
                </ItemDatas>
                {console.log('check1')}
                </StyledLink>
                {console.log('check')}
              </ItemPresentation>
            ))}
            </SubCategoryContainer>
          </PageContainer>
            )
          : (
        <Outlet/>
            )}
      </PageWrapper>
  );
}

ItemCategoryPage.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemCategoryPage;
