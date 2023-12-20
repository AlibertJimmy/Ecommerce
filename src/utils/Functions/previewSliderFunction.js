// Import Constant
import { previewSliderAmountOfPictureDisplayed } from '../Constant';

export function determineNecessaryScrolling (pictureToDisplayIndex, scopeStart, scopeEnd) {
  let scrollAction;

  // if the picture to display isn't in the scope
  if (!((scopeStart < pictureToDisplayIndex) && (pictureToDisplayIndex < scopeEnd))) {
    if (pictureToDisplayIndex > scopeEnd) {
      scrollAction = 'scrollRight';
    } else if (pictureToDisplayIndex < scopeStart) {
      scrollAction = 'scrollLeft';
    }
  } else {
    scrollAction = 'none';
  }
  return scrollAction;
}

export function displayLeftButton (amountOfPictureToDisplay, scrollingIndex) {
  let display;
  if (amountOfPictureToDisplay <= previewSliderAmountOfPictureDisplayed) {
    display = false;
  } else {
    if (scrollingIndex === 0) {
      display = false;
    } else {
      display = true;
    }
  }
  // console.log('displayLeftButton');
  // console.log(display);
  return display;
}

export function displayRightButton (amountOfPictureToDisplay, scrollingIndex, maxScrollingIndex) {
  let display;
  if (amountOfPictureToDisplay <= previewSliderAmountOfPictureDisplayed) {
    display = false;
  } else {
    if (scrollingIndex === maxScrollingIndex) {
      display = false;
    } else {
      display = true;
    }
  }
  // console.log('displayRightButton');
  // console.log(display);
  return display;
}
