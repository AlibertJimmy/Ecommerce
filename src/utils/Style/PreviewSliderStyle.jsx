// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../Colors';
import { previewSliderElementBorderWith, previewSliderElementGap, previewSliderElementHeight, previewSliderElementWidth } from '../Constant';
/*
IllustrationDisplayHeight, IllustrationDisplayHeightResponsiveTablet, IllustrationDisplayHeightResponsiveMobile,
  PicturePreviewWidth, PicturePreviewWidthResponsiveTablet, PicturePreviewWidthResponsiveMobile,
  PicturePreviewHeight, PicturePreviewHeightResponsiveTablet, PicturePreviewHeightResponsiveMobile,
  */

// Import Constants

/* Previous Slider */

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

`;
/*
  @media (max-width: ${responsiveWidthTablet}px){
    max-width: ${IllustrationDisplayWidthResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    max-width: ${IllustrationDisplayWidthResponsiveMobile}px;
  }

  @media (max-width: 1242px){
    max-width: 900px;
  }

  @media (max-width: 941px){
    max-width: 600px;
  }

  @media (max-width: 641px){
    max-width: 300px;
  }
  */

export const SliderHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-start: end;
`;

export const CommonLinksIcon = css`
  width: 25px;
  height: 25px;

`;

export const StyledIcon = styled(FontAwesomeIcon)`
  ${CommonLinksIcon};
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

    &:hover{

      ${StyledIcon}{
        color: ${colors.orangeCustom};
      } 
    }

    @media (max-width: 641px){
      margin: 2px;
    }
  }

  @media (max-width: 641px){
    width: 120px;
  }
`;
// scroll-behavior: smooth;
export const Slider = styled.div`
  display: flex;
  gap: ${previewSliderElementGap}px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
  position: relative;
  padding: 1rem 0.6rem;
  width: 625px;
`;

/* Previous Item */
// transition: all ${sliderAnimationDuration}ms ease-in;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  height: ${previewSliderElementHeight}px;
  width: ${previewSliderElementWidth}px;

  border-radius: 15px;
  outline: ${previewSliderElementBorderWith}px solid rgba(0, 0, 0, .6);
  
  cursor: pointer;
  

  &:hover {
    outline: 2px solid rgba(0, 0, 0, .6);
  }
`;

//

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
`;

export const ScrollingButton = styled.button`
  
  height: ${previewSliderElementHeight}px;
  width: 100%;

  border: none;
  margin:0;

  color: white;
  background-color: ${colors.marineBlue};

  &:hover{
    color: ${colors.orangeCustom};
  }
`;
export const PreviewPictureContainer = styled.div`

`;

export const ArticlePicturePreviewSelection = styled.img`
  max-height: ${previewSliderElementWidth}px;
  max-width: ${previewSliderElementHeight}px;
`;
