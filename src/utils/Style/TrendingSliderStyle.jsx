// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constants
import {
  sliderElementWidth, sliderElementPictureWidth, sliderElementGap
} from '../Constant';
/* Trending Slider */

export const SliderWrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto 0 auto;

  @media (max-width: 1242px){
    max-width: 900px;
  }

  @media (max-width: 941px){
    max-width: 600px;
  }

  @media (max-width: 641px){
    max-width: 300px;
  }

`;

export const SliderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Slider = styled.div`
  display: flex;
  gap: ${sliderElementGap}px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;
  padding: 1rem 0.6rem;
`;

/* Trending Item */

export const ItemContainer = styled.div`
  display: flex;

  height: auto;  
  width: ${sliderElementWidth}px;

  border-radius: 15px;
  outline: 2px solid rgba(0, 0, 0, .205);
  
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    outline: 2px solid rgba(0, 0, 0, .6);
  }
`;

export const ArticlePicture = styled.img`
  max-height: 100px;
  max-width: ${sliderElementPictureWidth}px;
`;

export const ArticleDescription = styled.div`
  width: ${sliderElementWidth}px;
  font-size: 20px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  margin: 5px 0;
`;
