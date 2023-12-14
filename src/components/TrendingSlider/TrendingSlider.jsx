// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import TrendingItem from './TrendingItems';

// Import Style
import styled from 'styled-components';

const Trending = styled.div`
  padding-bottom: 10rem;
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

const ButtonContainer = styled.div`
  button {
    color: white;
    background-color: #373737;
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
`;

const TitleButton = styled.div`
  display: flex;
  justify-content: space-between;
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
  console.log('TRENDING SLIDER');
  return (
    <Trending id='trending'>
      <div id="container">
        <TitleButton id="titleButton">
          <h3>Trending Now</h3>
          <ButtonContainer id='buttonContainer'>
            <button title="scroll left" onClick={slideLeft}>
              left
            </button>
            <button title="scroll right" onClick={slideRight}>
              right
            </button>
          </ButtonContainer>
        </TitleButton>
        <Slider id="slider">
          <TrendingItem itemCategory={itemCategory}/>
        </Slider>
      </div>
    </Trending>
  );
}

TrendingSlider.propTypes = {
  itemCategory: PropTypes.string.isRequired
};

export default TrendingSlider;
