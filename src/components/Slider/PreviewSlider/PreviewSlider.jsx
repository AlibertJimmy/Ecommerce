// Import React Libraries
import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { usePreviewSliderContext } from '../../../context/PreviewSliderContext';

// Import Components
import PreviewItem from './PreviewItems';

// Import Function
import { determineNecessaryScrolling, displayLeftButton, displayRightButton } from '../../../utils/Functions/previewSliderFunction';

// Import Style
import { StyledIcon } from '../../../utils/Style/GlobalStyle';
import {
  SliderWrapper,
  Slider,
  ButtonContainer,
  ScrollingButton
} from '../../../utils/Style/PreviewSliderStyle';

// Import Constants
import { previewSliderElementBorderWith, previewSliderElementGap, previewSliderElementWidth } from '../../../utils/Constant';

function PreviewSlider ({ pictureList, setImage }) {
  const { pictureToDisplayIndex, scopeStart, setScopeStart, scopeEnd, setScopeEnd } = usePreviewSliderContext();
  const [scrollingIndex, updatescrollingIndex] = useState(0);
  const sliderRef = useRef(null);

  // Fix the maximum amount of possible scroll
  let maxScrollingIndex;
  if (pictureList.length <= 4) {
    maxScrollingIndex = 0;
  } else if (pictureList.length > 4) {
    maxScrollingIndex = pictureList.length - 4;
  }

  useEffect(() => {
    updatescrollingIndex(0);
    // Reset the position of the slider
    const slider = sliderRef.current;
    slider.scrollLeft = 0;
  }, []);

  const slideLeft = async () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - (previewSliderElementWidth + previewSliderElementGap + previewSliderElementBorderWith);

    updatescrollingIndex(scrollingIndex - 1);
    setScopeStart(scopeStart - 1);
    setScopeEnd(scopeEnd - 1);
  };

  const slideRight = async () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + (previewSliderElementWidth + previewSliderElementGap + previewSliderElementBorderWith);

    updatescrollingIndex(scrollingIndex + 1);
    setScopeStart(scopeStart + 1);
    setScopeEnd(scopeEnd + 1);
  };

  useEffect(() => {
    console.log(`listIndex : ${scrollingIndex}`);
    // Check if the slider has reached an extremity
    if (scrollingIndex === maxScrollingIndex) {
      console.log('Max Right Reached');
    } else if (scrollingIndex === 0) {
      console.log('Min Left Reached');
    }
  }, [scrollingIndex]);

  useEffect(() => {
    const scrollingAction = determineNecessaryScrolling(pictureToDisplayIndex, scopeStart, scopeEnd);
    if (scrollingAction === 'scrollRight') {
      slideRight();
    } else if (scrollingAction === 'scrollLeft') {
      slideLeft();
    }
  }, [pictureToDisplayIndex]);

  return (
    <SliderWrapper id='sliderWrapper'>
      <ButtonContainer id='scrollingButtonLeftContainer'>
        <ScrollingButton id='scrollLeftButton' onClick={slideLeft}
        style={{ display: displayLeftButton(pictureList.length, scrollingIndex) === false ? 'none' : undefined }}>
          <StyledIcon icon={faChevronLeft} />
        </ScrollingButton>
      </ButtonContainer>
      <Slider id='slider' ref={sliderRef}>
        <PreviewItem pictureList={pictureList} setImage={setImage}/>
      </Slider>
      <ButtonContainer id='scrollingButtonRightContainer'>
        <ScrollingButton id='scrollRightButton' onClick={slideRight}
        style={{ display: displayRightButton(pictureList.length, scrollingIndex, maxScrollingIndex) === false ? 'none' : undefined }}>
          <StyledIcon icon={faChevronRight} />
        </ScrollingButton>
      </ButtonContainer>
    </SliderWrapper>
  );
}

PreviewSlider.propTypes = {
  pictureList: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired
};

export default PreviewSlider;
