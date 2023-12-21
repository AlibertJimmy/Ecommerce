// Import Datas

// Shelter
import { shelterSubCategoryList } from '../../datas/Shelter/SubCategory';
// Bedding
import { beddingSubCategoryList } from '../../datas/Bedding/SubCategory';
// Cooking
import { cookingSubCategoryList } from '../../datas/Cooking/SubCategory';
// Portage
import { portageSubCategoryList } from '../../datas/Portage/SubCategory';

export function getItemSubCategoryList (itemCategory) {
  const functionMap = {
    Shelter: shelterSubCategoryList,
    Bedding: beddingSubCategoryList,
    Cooking: cookingSubCategoryList,
    Portage: portageSubCategoryList
  };

  const selectedItemList = functionMap[itemCategory];
  if (selectedItemList) {
    /*
    console.log('selectedItemList');
    console.log(selectedItemList);
    */
    return selectedItemList;
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};
