// Import Datas

// Shelter
import { singleWallList } from '../../datas/Shelter/SingleWall';
import { doubleWallList } from '../../datas/Shelter/DoubleWall';
import { accessoryList } from '../../datas/Shelter/Accessory';

// Bedding
import { hammockList } from '../../datas/Bedding/Hammock';
import { sleepingBagList } from '../../datas/Bedding/SleepingBag';
import { mattressList } from '../../datas/Bedding/Mattress';

const completeItemListBySubCategory = [
  // Shelter
  singleWallList,
  doubleWallList,
  accessoryList,
  // Bedding
  hammockList,
  sleepingBagList,
  mattressList
];

export function whatsNewParser () {
  let newArticleArrray = [];
  for (let i = 0; i < completeItemListBySubCategory.length; i++) {
    const subCategoryList = completeItemListBySubCategory[i];
    for (let j = 0; j < subCategoryList.length; j++) {
      // console.log(`subCategoryList[j].name : ${subCategoryList[j].name}`);
      // console.log(`subCategoryList[j].new : ${subCategoryList[j].new}`);
      if (subCategoryList[j].new === true) {
        newArticleArrray.push(subCategoryList[j]);
      }
    }
  }
  if (newArticleArrray.length > 7) {
    newArticleArrray = pickRandomNewArticle(newArticleArrray);
  }
  // console.log('newArticleArrray');
  // console.log(newArticleArrray);
  return newArticleArrray;
}

function pickRandomNewArticle (newArticleArray) {
  const shuffledArray = [...newArticleArray];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, 8);
}
