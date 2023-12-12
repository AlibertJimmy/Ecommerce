// Import Datas

// Shelter
import { shelterSubCategoryList } from '../../datas/Shelter/Subcategory';

export function getItemSubCategoryList (itemCategory) {
  const functionMap = {
    Shelter: shelterSubCategoryList
  };

  const selectedItemList = functionMap[itemCategory];
  if (selectedItemList) {
    console.log('selectedItemList');
    console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};
