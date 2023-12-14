// Import React Libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import TrendingItem from './TrendingItems';

// Import Assets
// import ArrowLeft from '../../assets/Functionnal_Icon/arrowLeft.png';
import ArrowLeftHover from '../../assets/Functionnal_Icon/arrowLeft_Orange.png';
// import ArrowRight from '../../assets/Functionnal_Icon/arrowRight.png';
import ArrowRightHover from '../../assets/Functionnal_Icon/arrowRight_Orange.png';

// Import Style
import styled, { css } from 'styled-components';
import { StyledTitleH1 } from '../../utils/Style/GlobalStyle';
import colors from '../../utils/Colors';

const SliderWrapper = styled.div`
  border: 1px solid yellow;
`;

const Slider = styled.div`
  display: flex;
  gap: 2.2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;
  padding: 1rem .6rem;
`;

const SliderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

const CommonLinksIcon = css`
  width: 25px;
  height: 25px;

`;

const LeftIcon = styled.img`
  ${CommonLinksIcon};
`;

const RightIcon = styled.img`
  ${CommonLinksIcon};
`;

const SliderButtonContainer = styled.div`
  border: 1px solid blue;
  padding: 2px;

  button {
    color: white;
    background-color: ${colors.marineBlue};
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover{

      ${LeftIcon}{
        content: url(${ArrowLeftHover});
      } 
      ${RightIcon} {
        content: url(${ArrowRightHover});
      }
    }
  }
`;

function TrendingSlider ({ itemCategory }) {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <SliderWrapper id='trending'>
        <SliderHeaderContainer id='sliderHeaderContainer'>
          <StyledTitleH1>Trending Now</StyledTitleH1>
          <SliderButtonContainer id='sliderButtonContainer'>
            <button id='scrollLeftButton' onClick={slideLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id='scrollRightButton' onClick={slideRight}>
              <FontAwesomeIcon icon={faChevronRight} />
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
