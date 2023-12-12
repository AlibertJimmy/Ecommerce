export function displayOutlet (itemCategory, itemSubCategory, currentUrl) {
  if (currentUrl === `/${itemCategory}/${itemSubCategory}`) {
    return true;
  } else {
    return false;
  }
}

export function displayOutletSubCategory (itemCategory, currentUrl) {
  if (currentUrl === `/${itemCategory}`) {
    return true;
  } else {
    return false;
  }
}
