// Import React Libraries
import React, { useEffect, useState } from 'react';
// import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import TrendingItem from './TrendingItems';

// Import Functions
import { getMaxScrollingIndex, getTrendingItem } from '../../../utils/Functions/trendingItemFunction';

// Import Style
import { StyledTitleH1 } from '../../../utils/Style/GlobalStyle';
import {
  SliderWrapper,
  SliderHeaderContainer,
  SliderButtonContainer, StyledIcon,
  Slider
} from '../../../utils/Style/TrendingSliderStyle';

// Import Constants
import { trendingSliderElementBorderWith, trendingSliderElementGap, trendingSliderElementWidth } from '../../../utils/Constant';

function TrendingSlider ({ itemCategory }) {
  const [trendingItemList, updateTrendingItemList] = useState([]);
  const [scrollingIndex, updatescrollingIndex] = useState(0);
  const [screenWidth, updatescreenWidth] = useState(window.innerWidth);
  const [maxScrollingIndex, updateMawScrollingIndex] = useState(getMaxScrollingIndex(screenWidth));

  useEffect(() => {
    updateTrendingItemList(getTrendingItem(itemCategory));
    updatescrollingIndex(0);

    // Reset the position of the slider
    const slider = document.getElementById('slider');
    slider.scrollLeft = 0;

    const handleResize = () => {
      updatescreenWidth(window.innerWidth);
      updateMawScrollingIndex(getMaxScrollingIndex(screenWidth));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - (trendingSliderElementWidth + trendingSliderElementGap + trendingSliderElementBorderWith);

    updatescrollingIndex(scrollingIndex - 1);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + (trendingSliderElementWidth + trendingSliderElementGap + trendingSliderElementBorderWith);

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
        <SliderHeaderContainer id='sliderHeaderContainer'>
          <StyledTitleH1>Trending Now</StyledTitleH1>
          <SliderButtonContainer id='sliderButtonContainer'>
            <button id='scrollLeftButton' onClick={slideLeft} style={{ display: scrollingIndex === 0 ? 'none' : undefined }}>
              <StyledIcon icon={faChevronLeft} />
            </button>
            <button id='scrollRightButton' onClick={slideRight} style={{ display: scrollingIndex === maxScrollingIndex ? 'none' : undefined }}>
              <StyledIcon icon={faChevronRight} />
            </button>
          </SliderButtonContainer>
        </SliderHeaderContainer>
        <Slider id="slider">
          <TrendingItem itemCategory={itemCategory} trendingItemList={trendingItemList}/>
        </Slider>
    </SliderWrapper>
  );
}

TrendingSlider.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default TrendingSlider;
