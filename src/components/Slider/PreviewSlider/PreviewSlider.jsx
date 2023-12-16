// Import React Libraries
import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import PreviewItem from './PreviewItems';

// Import Style
import {
  SliderWrapper,
  StyledIcon,
  Slider,
  ButtonContainer,
  ScrollingButton
} from '../../../utils/Style/PreviewSliderStyle';

// Import Constants
import { previewSliderElementBorderWith, previewSliderElementGap, previewSliderElementWidth } from '../../../utils/Constant';

function PreviewSlider ({ pictureList, setImage }) {
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
  };

  const slideRight = async () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + (previewSliderElementWidth + previewSliderElementGap + previewSliderElementBorderWith);

    updatescrollingIndex(scrollingIndex + 1);
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

  return (
    <SliderWrapper id='sliderWrapper'>
      <ButtonContainer id='scrollingButtonLeftContainer'>
        <ScrollingButton id='scrollLeftButton' onClick={slideLeft} style={{ display: scrollingIndex === 0 ? 'none' : undefined }}>
          <StyledIcon icon={faChevronLeft} />
        </ScrollingButton>
      </ButtonContainer>
        <Slider id='slider' ref={sliderRef}>
          <PreviewItem pictureList={pictureList} setImage={setImage}/>
        </Slider>
        <ButtonContainer id='scrollingButtonRightContainer'>
          <ScrollingButton id='scrollRightButton' onClick={slideRight} style={{ display: scrollingIndex === maxScrollingIndex ? 'none' : undefined }}>
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
