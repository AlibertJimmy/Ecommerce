// Import Functions
import { getAllItemSubCategoryList } from './ItemFunctions';

// Import Constants
import { trendingSliderMaxItem } from '../Constant';

export function getTrendingItem (itemCategory) {
  const maxLength = trendingSliderMaxItem;
  const itemList = getAllItemSubCategoryList(itemCategory);

  const flattenedArray = itemList.reduce((acc, subCategoryArray) => acc.concat(subCategoryArray), []);

  for (let i = flattenedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flattenedArray[i], flattenedArray[j]] = [flattenedArray[j], flattenedArray[i]];
  }
  /*
  console.log('flattenedArray.slice(0, maxLength)');
  console.log(flattenedArray.slice(0, maxLength));
  */
  return flattenedArray.slice(0, maxLength);
}

export function getMaxScrollingIndex (screenWidth) {
  let amountOfItemDisplay;
  if (screenWidth >= 1242) {
    amountOfItemDisplay = 4;
  }

  if ((screenWidth < 1242) && (screenWidth >= 941)) {
    amountOfItemDisplay = 3;
  }

  if ((screenWidth < 941) && (screenWidth >= 641)) {
    amountOfItemDisplay = 2;
  }

  if (screenWidth < 641) {
    amountOfItemDisplay = 1;
  }
  const maxScrollingIndex = trendingSliderMaxItem - amountOfItemDisplay;
  return maxScrollingIndex;
}
