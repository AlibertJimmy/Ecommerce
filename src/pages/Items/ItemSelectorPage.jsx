// Import React Libraries
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import styled from 'styled-components';
import { PageWrapper } from '../../utils/Styles';
import { displayOutlet } from '../../utils/Functions/pathFunctions';

// Import Constants
import ItemSelector from '../../components/Items/ItemSelector';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ItemSelectorPage ({ itemCategory, itemSubCategory }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const shouldDisplayPageContainer = displayOutlet(itemCategory, itemSubCategory, currentUrl);

  /*
  console.log(`currentUrl : ${currentUrl}`);
  console.log(`shouldDisplayPageContainer ! ${shouldDisplayPageContainer}`);
  */

  return (
      <PageWrapper>
        {shouldDisplayPageContainer
          ? (
          <PageContainer id='pageContainer'>
            <ItemSelector itemCategory={itemCategory} itemSubCategory={itemSubCategory}/>
          </PageContainer>
            )
          : (
        <Outlet/>
            )}
      </PageWrapper>
  );
}

ItemSelectorPage.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemSelectorPage;
