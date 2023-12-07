export function displayOutlet (itemCategory, itemSubCategory, currentUrl) {
  if (currentUrl === `/${itemCategory}/${itemSubCategory}`) {
    return true;
  } else {
    return false;
  }
}
