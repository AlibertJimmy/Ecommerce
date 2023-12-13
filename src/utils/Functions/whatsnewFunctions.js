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
  // Sonder chacun des elements de chaque liste, si la mention new === true l'ajouter à un array
  // lors d'un click sur l'element amener l'utilisateur sur la page de cet article
  const newArticleArrray = [];
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
  // console.log('newArticleArrray');
  // console.log(newArticleArrray);
  return newArticleArrray;
}
