// Import React Libraries
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context

// Import Components
import ItemSubcategorySelector from '../../components/Items/ItemSubCategorySelector';
import TrendingSlider from '../../components/Slider/TrendingSlider/TrendingSlider';

// Import Functions
import { displayOutletSubCategory } from '../../utils/Functions/pathFunctions';

// Import Style
import styled from 'styled-components';
import { PageWrapper } from '../../utils/Styles';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ItemSubcategorySelectorPage ({ itemCategory }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const shouldDisplayPageContainer = displayOutletSubCategory(itemCategory, currentUrl);
  /*
  console.log(`currentUrl : ${currentUrl}`);
  console.log(`shouldDisplayPageContainer ! ${shouldDisplayPageContainer}`);
  */
  return (
      <PageWrapper id='pageWrapper'>
        {shouldDisplayPageContainer
          ? (
        <PageContainer>
          <ItemSubcategorySelector itemCategory={itemCategory} />
          <TrendingSlider itemCategory={itemCategory}/>
        </PageContainer>
            )
          : (
        <Outlet/>
            )}
      </PageWrapper>
  );
}

ItemSubcategorySelectorPage.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default ItemSubcategorySelectorPage;
