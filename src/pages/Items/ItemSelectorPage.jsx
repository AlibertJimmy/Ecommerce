// Import React Libraries
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Component
import ItemSelector from '../../components/Items/ItemSelector';

// Import Function
import { getProductList } from '../../utils/Functions/ItemFunctions';
import { displayOutlet } from '../../utils/Functions/pathFunctions';

function ItemSelectorPage ({ itemCategory, itemSubCategory }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const shouldDisplayPageContainer = displayOutlet(itemCategory, itemSubCategory, currentUrl);

  /*
  console.log(`currentUrl : ${currentUrl}`);
  console.log(`shouldDisplayPageContainer ! ${shouldDisplayPageContainer}`);
  */

  const itemList = getProductList(itemCategory, itemSubCategory);
  const titleWrapper = `${itemCategory} / ${itemSubCategory}`;
  return (
    <>
        {shouldDisplayPageContainer
          ? (
            <ItemSelector itemList={itemList} titleWrapper={titleWrapper}/>
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
