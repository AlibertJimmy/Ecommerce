import { getAllItemSubCategoryList } from './ItemFunctions';

export function getTrendingItem (itemCategory) {
  const maxLength = 8;
  const itemList = getAllItemSubCategoryList(itemCategory);

  const flattenedArray = itemList.reduce((acc, subCategoryArray) => acc.concat(subCategoryArray), []);

  for (let i = flattenedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flattenedArray[i], flattenedArray[j]] = [flattenedArray[j], flattenedArray[i]];
  }
  console.log('flattenedArray.slice(0, maxLength)');
  console.log(flattenedArray.slice(0, maxLength));
  return flattenedArray.slice(0, maxLength);
}
