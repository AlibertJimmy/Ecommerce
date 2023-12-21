// Import Datas

// Shelter
import { singleWallList } from '../../datas/Shelter/SingleWall';
import { doubleWallList } from '../../datas/Shelter/DoubleWall';
import { accessoryList } from '../../datas/Shelter/Accessory';

// Bedding
import { hammockList } from '../../datas/Bedding/Hammock';
import { sleepingBagList } from '../../datas/Bedding/SleepingBag';
import { mattressList } from '../../datas/Bedding/Mattress';
import { beddingAccessoryList } from '../../datas/Bedding/Accessory';

// Cooking
import { cookingList } from '../../datas/Cooking/Cooking';
import { stoveList } from '../../datas/Cooking/Stove';

// Portage
import { minus30LList } from '../../datas/Portage/Minus30L';
import { plus30LList } from '../../datas/Portage/Plus30L';

// Import Constants
import { responsiveWidthTablet } from '../Constant';

/* Browse a list of item and return the index of an item corresponding to a specific id */
export function getItemCorrespondingToId (id, itemList) {
  // console.log('function getItemCorrespondingToId');
  // console.log(`id : ${id}`);
  let index;
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].id === id) {
      index = i;
    }
  }
  // console.log(`index : ${index}`);
  return index;
};

/* Generates a list containing all the items of a category */
export function getAllItemSubCategoryList (itemCategory) {
  const functionMap = {
    Shelter: [singleWallList, doubleWallList, accessoryList],
    Bedding: [hammockList, sleepingBagList, mattressList, beddingAccessoryList],
    Cooking: [cookingList, stoveList],
    Portage: [minus30LList, plus30LList]
  };

  if (functionMap) {
    return functionMap[itemCategory];
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};

/* Return the subCategory list of items using intermediary functions */
export function getProductList (itemCategory, itemSubCategory) {
  const functionMap = {
    Shelter: getItemListShelter,
    Bedding: getItemListBedding,
    Cooking: getItemListCooking,
    Portage: getItemListPortage
  };

  const selectedFunction = functionMap[itemCategory];
  if (selectedFunction) {
    return selectedFunction(itemSubCategory);
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};

// Shelter
function getItemListShelter (itemSubCategory) {
  const functionMap = {
    SingleWall: singleWallList,
    DoubleWall: doubleWallList,
    Accessory: accessoryList

  };

  const selectedItemList = functionMap[itemSubCategory];
  if (selectedItemList) {
    // console.log('selectedItemList');
    // console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemSubCategory: ${itemSubCategory}`);
  }
};

// Bedding
function getItemListBedding (itemSubCategory) {
  const functionMap = {
    Hammock: hammockList,
    SleepingBag: sleepingBagList,
    Mattress: mattressList,
    Accessory: beddingAccessoryList
  };

  const selectedItemList = functionMap[itemSubCategory];
  if (selectedItemList) {
    // console.log('selectedItemList');
    // console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemSubCategory: ${itemSubCategory}`);
  }
};

// Cooking
function getItemListCooking (itemSubCategory) {
  const functionMap = {
    Cooking: cookingList,
    Stove: stoveList
  };

  const selectedItemList = functionMap[itemSubCategory];
  if (selectedItemList) {
    // console.log('selectedItemList');
    // console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemSubCategory: ${itemSubCategory}`);
  }
};

// Portage
function getItemListPortage (itemSubCategory) {
  const functionMap = {
    Minus30L: minus30LList,
    Plus30L: plus30LList
  };

  const selectedItemList = functionMap[itemSubCategory];
  if (selectedItemList) {
    // console.log('selectedItemList');
    // console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemSubCategory: ${itemSubCategory}`);
  }
};

export function displayPreviewSlider (amountOfPictureAvailable, screenWidth) {
  let previewSliderDisplay;
  if ((amountOfPictureAvailable <= 1) || (screenWidth <= responsiveWidthTablet)) {
    previewSliderDisplay = false;
  } else {
    return true;
  }
  return previewSliderDisplay;
}
