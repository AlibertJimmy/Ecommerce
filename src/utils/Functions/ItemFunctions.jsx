// Import Datas

// Shelter
import { singleWallList } from '../../datas/Shelter/SingleWall';
import { doubleWallList } from '../../datas/Shelter/DoubleWall';

export function getItemList (itemCategory, itemSubCategory) {
  const functionMap = {
    Shelter: getItemListShelter
  };

  const selectedFunction = functionMap[itemCategory];
  if (selectedFunction) {
    return selectedFunction(itemSubCategory);
  } else {
    console.error(`Unknown itemCategory: ${itemCategory}`);
  }
};

export function getItemListShelter (itemSubCategory) {
  const functionMap = {
    SingleWall: singleWallList,
    DoubleWall: doubleWallList
  };

  const selectedItemList = functionMap[itemSubCategory];
  if (selectedItemList) {
    console.log('selectedItemList');
    console.log(selectedItemList);
    return selectedItemList;
  } else {
    console.error(`Unknown itemSubCategory: ${itemSubCategory}`);
  }
};
