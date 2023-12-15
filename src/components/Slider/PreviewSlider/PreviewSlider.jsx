// Import React Libraries
import React, { useEffect, useState } from 'react';
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
  ButtonContainer
} from '../../../utils/Style/PreviewSliderStyle';

// Import Constants
import { sliderElementBorderWith, previewSliderElementGap, previewSliderElementWidth } from '../../../utils/Constant';

function PreviewSlider ({ pictureList }) {
  const [scrollingIndex, updatescrollingIndex] = useState(0);
  const maxScrollingIndex = pictureList.length - 4;

  useEffect(() => {
    updatescrollingIndex(0);

    // Reset the position of the slider
    const slider = document.getElementById('slider');
    slider.scrollLeft = 0;
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - (previewSliderElementWidth + previewSliderElementGap + sliderElementBorderWith);

    updatescrollingIndex(scrollingIndex - 1);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + (previewSliderElementWidth + previewSliderElementGap + sliderElementBorderWith);

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
      <ButtonContainer>
        <button id='scrollLeftButton' onClick={slideLeft} style={{ display: scrollingIndex === 0 ? 'none' : undefined }}>
          <StyledIcon icon={faChevronLeft} />
        </button>
      </ButtonContainer>
        <Slider id="slider">
          <PreviewItem pictureList={pictureList}/>
        </Slider>
        <ButtonContainer>
          <button id='scrollRightButton' onClick={slideRight} style={{ display: scrollingIndex === maxScrollingIndex ? 'none' : undefined }}>
            <StyledIcon icon={faChevronRight} />
          </button>
        </ButtonContainer>
    </SliderWrapper>
  );
}

PreviewSlider.propTypes = {
  pictureList: PropTypes.array.isRequired
};

export default PreviewSlider;
