// Import React Libraries
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { displayOutlet } from '../../utils/Functions/pathFunctions';

// Import Constants
import ItemSelector from '../../components/Items/ItemSelector';

function ItemSelectorPage ({ itemCategory, itemSubCategory }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const shouldDisplayPageContainer = displayOutlet(itemCategory, itemSubCategory, currentUrl);

  /*
  console.log(`currentUrl : ${currentUrl}`);
  console.log(`shouldDisplayPageContainer ! ${shouldDisplayPageContainer}`);
  */

  return (
    <>
        {shouldDisplayPageContainer
          ? (
            <ItemSelector itemCategory={itemCategory} itemSubCategory={itemSubCategory}/>
            )
          : (
        <Outlet/>
            )}
    </>
  );
}

ItemSelectorPage.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemSelectorPage;
