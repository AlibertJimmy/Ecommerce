// Import React Libraries
import React, { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import TrendingItem from './TrendingItems';

// Import Functions
import { getMaxScrollingIndex, getTrendingItem } from '../../../utils/Functions/trendingItemFunction';

// Import Style
import { StyledIcon, StyledTitleH1 } from '../../../utils/Style/GlobalStyle';
import {
  SliderWrapper,
  SliderHeaderContainer,
  SliderButtonWrapper, SliderButtonContainer,
  Slider
} from '../../../utils/Style/TrendingSliderStyle';

// Import Constants
import {
  trendingSliderElementGap, trendingSliderElementWidth
} from '../../../utils/Constant';

function TrendingSlider ({ itemCategory }) {
  const [trendingItemList, updateTrendingItemList] = useState(getTrendingItem(itemCategory));
  const [scrollingIndex, updatescrollingIndex] = useState(0);
  const [maxScrollingIndex, updateMaxScrollingIndex] = useState(getMaxScrollingIndex(trendingItemList.length, window.innerWidth));

  useEffect(() => {
    updateTrendingItemList(getTrendingItem(itemCategory));
    updatescrollingIndex(0);
    updateMaxScrollingIndex(getMaxScrollingIndex(trendingItemList.length, window.innerWidth));

    // Reset the position of the slider
    const slider = document.getElementById('trendingSlider');
    slider.scrollLeft = 0;
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById('trendingSlider');
    slider.scrollLeft = slider.scrollLeft - (trendingSliderElementWidth + trendingSliderElementGap);

    updatescrollingIndex(scrollingIndex - 1);
  };

  const slideRight = () => {
    const slider = document.getElementById('trendingSlider');
    slider.scrollLeft = slider.scrollLeft + (trendingSliderElementWidth + trendingSliderElementGap);

    updatescrollingIndex(scrollingIndex + 1);
  };

  /*
  useEffect(() => {
    // console.log(`listIndex : ${scrollingIndex}`);
    // Check if the slider has reached an extremity
    if (scrollingIndex === maxScrollingIndex) {
      console.log('Max Right Reached');
    } else if (scrollingIndex === 0) {
      console.log('Min Left Reached');
    }
  }, [scrollingIndex]);
  */

  return (
    <SliderWrapper id='trendingSliderWrapper'>
        <SliderHeaderContainer id='sliderHeaderContainer'>
          <StyledTitleH1>Trending Now</StyledTitleH1>
          <SliderButtonWrapper id='sliderButtonWrapper'>
            <SliderButtonContainer id='sliderLeftButtonContainer'>
            <button id='scrollLeftButton' onClick={slideLeft} style={{ display: scrollingIndex === 0 ? 'none' : undefined }}>
              <StyledIcon icon={faChevronLeft} />
            </button>
            </SliderButtonContainer>
            <SliderButtonContainer id='sliderRightButtonContainer'>
            <button id='scrollRightButton' onClick={slideRight} style={{ display: scrollingIndex === maxScrollingIndex ? 'none' : undefined }}>
              <StyledIcon icon={faChevronRight} />
            </button>
            </SliderButtonContainer>
          </SliderButtonWrapper>
        </SliderHeaderContainer>
        <Slider id="trendingSlider">
          <TrendingItem itemCategory={itemCategory} trendingItemList={trendingItemList}/>
        </Slider>
    </SliderWrapper>
  );
}

TrendingSlider.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default TrendingSlider;
