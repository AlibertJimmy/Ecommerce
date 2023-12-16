// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import ItemDetail from '../../components/Items/ItemDetail';

// Import Style
// import { PageWrapper } from '../../utils/Styles';

function ItemDetailPage ({ itemCategory, itemSubCategory }) {
  /*
  console.log(`itemCategory : ${itemCategory}`);
  console.log(`itemSubCategory : ${itemSubCategory}`);
  */

  return (
      <>
        <ItemDetail itemCategory={itemCategory} itemSubCategory={itemSubCategory} />
      </>
  );
}

ItemDetailPage.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  itemSubCategory: PropTypes.string.isRequired
};

export default ItemDetailPage;
