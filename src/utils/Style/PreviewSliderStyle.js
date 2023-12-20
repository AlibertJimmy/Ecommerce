// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../Colors';
import { previewSliderElementGap, previewSliderElementHeight, previewSliderElementWidth, responsiveWidthTablet } from '../Constant';

// Import Constants

/* Preview Slider */

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

`;

export const SliderHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-start: end;
`;

export const SliderButtonContainer = styled.div`
  padding: 2px;
  button {
    color: white;
    background-color: ${colors.marineBlue};
    margin: 5px;
    border: none;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: all 0.1s ease-in;
    border-radius: 15px;

    @media (max-width: 641px){
      margin: 2px;
    }
  }

  @media (max-width: 641px){
    width: 120px;
  }
`;

export const Slider = styled.div`
  display: flex;
  gap: ${previewSliderElementGap}px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  
  position: relative;
  padding: 1rem 0.6rem;
  width: 630px;
`;

/* Previous Item */
//
//
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${previewSliderElementHeight}px;
  width: ${previewSliderElementWidth}px;
  
  cursor: pointer;
  border: 1px solid red;
`;

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 150px;
`;

export const ArticlePicturePreviewSelection = styled.img`
  max-width: ${previewSliderElementWidth}px;
  max-height: ${previewSliderElementHeight}px;
`;

//
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  
`;

export const ScrollingButton = styled.button`
  
  height: 80px;
  width: 100%;

  border: none;
  margin:0;

  color: white;
  background-color: ${colors.marineBlue};

  &:hover{
    color: ${colors.orangeCustom};
  }

  @media (max-width: ${responsiveWidthTablet}px){
    margin: 2px;
  }
`;

/*

  */
