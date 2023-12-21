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
};

function getAmountOfPictureDisplayedOnTheSlider (screenWidth) {
  let amountOfPictureDisplay;
  if (screenWidth >= 1242) {
    amountOfPictureDisplay = 4;
  }

  if ((screenWidth < 1242) && (screenWidth >= 941)) {
    amountOfPictureDisplay = 3;
  }

  if ((screenWidth < 941) && (screenWidth >= 641)) {
    amountOfPictureDisplay = 2;
  }

  if (screenWidth < 641) {
    amountOfPictureDisplay = 1;
  }
  return amountOfPictureDisplay;
};

export function getMaxScrollingIndex (amountOfProductToDisplay, screenWidth) {
  console.log('getMaxScrollingIndex');
  const amountOfPictureDisplayedOnTheSlider = getAmountOfPictureDisplayedOnTheSlider(screenWidth);
  console.log(`amountOfPictureDisplayed : ${amountOfPictureDisplayedOnTheSlider}`);
  console.log(`amountOfProductToDisplay : ${amountOfProductToDisplay}`);
  let maxScrollingIndex = amountOfProductToDisplay - amountOfPictureDisplayedOnTheSlider;
  if (maxScrollingIndex < 0) {
    maxScrollingIndex = 0;
  }
  console.log(`maxScrollingIndex : ${maxScrollingIndex}`);
  return maxScrollingIndex;
};
