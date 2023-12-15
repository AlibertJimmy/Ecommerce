// Import React Libraries
import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import TrendingItem from './TrendingItems';

// Import Style
import { StyledTitleH1 } from '../../utils/Style/GlobalStyle';
import {
  SliderWrapper,
  SliderHeaderContainer,
  SliderButtonContainer, StyledIcon,
  Slider
} from '../../utils/Style/TrendingSliderStyle';

// Import Constants
import { sliderElementGap, sliderElementWidth } from '../../utils/Constant';

function TrendingSlider ({ itemCategory }) {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - (sliderElementWidth + sliderElementGap);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + (sliderElementWidth + sliderElementGap);
  };

  return (
    <SliderWrapper id='sliderWrapper'>
        <SliderHeaderContainer id='sliderHeaderContainer'>
          <StyledTitleH1>Trending Now</StyledTitleH1>
          <SliderButtonContainer id='sliderButtonContainer'>
            <button id='scrollLeftButton' onClick={slideLeft}>
              <StyledIcon icon={faChevronLeft} />
            </button>
            <button id='scrollRightButton' onClick={slideRight}>
              <StyledIcon icon={faChevronRight} />
            </button>
          </SliderButtonContainer>
        </SliderHeaderContainer>
        <Slider id="slider">
          <TrendingItem itemCategory={itemCategory}/>
        </Slider>
    </SliderWrapper>
  );
}

TrendingSlider.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default TrendingSlider;
