// Import Datas

// Shelter
import { singleWallList } from '../../datas/Shelter/SingleWall';
import { doubleWallList } from '../../datas/Shelter/DoubleWall';
import { accessoryList } from '../../datas/Shelter/Accessory';

// Bedding
import { hammockList } from '../../datas/Bedding/Hammock';
import { sleepingBagList } from '../../datas/Bedding/SleepingBag';
import { mattressList } from '../../datas/Bedding/Mattress';

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
  console.log(`index : ${index}`);
  return index;
};

/* Generates a list containing all the items of a category */
export function getAllItemSubCategoryList (itemCategory) {
  const functionMap = {
    Shelter: [singleWallList, doubleWallList, accessoryList],
    Bedding: [hammockList, sleepingBagList, mattressList]
  };

  if (functionMap) {
    return functionMap[itemCategory];
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};

/* Return the subCategory list of items using intermediary functions */
export function getItemList (itemCategory, itemSubCategory) {
  const functionMap = {
    Shelter: getItemListShelter,
    Bedding: getItemListBedding
  };

  const selectedFunction = functionMap[itemCategory];
  if (selectedFunction) {
    return selectedFunction(itemSubCategory);
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};

// Shelter
export function getItemListShelter (itemSubCategory) {
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
export function getItemListBedding (itemSubCategory) {
  const functionMap = {
    Hammock: hammockList,
    SleepingBag: sleepingBagList,
    Mattress: mattressList
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
