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
