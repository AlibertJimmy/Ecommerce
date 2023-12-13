// Import Datas

// Shelter
import { shelterSubCategoryList } from '../../datas/Shelter/SubCategory';
import { beddingSubCategoryList } from '../../datas/Bedding/SubCategory';

export function getItemSubCategoryList (itemCategory) {
  const functionMap = {
    Shelter: shelterSubCategoryList,
    Bedding: beddingSubCategoryList
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
