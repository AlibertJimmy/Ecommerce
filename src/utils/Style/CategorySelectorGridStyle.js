// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

export const GridWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 19px;
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'one two four' 'one two four-low';
  gap: 1.3rem;

  height: 400px;

  @media (max-width:750px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
            "one two"
            "four four-low";
        grid-gap: 13px;
        gap: 13px;
  }
`;

export const FeaturedGrid = css`
  position: relative;  

  overflow: hidden;
  
  cursor: pointer;
`;

export const GridOne = styled.div`
  ${FeaturedGrid}
  grid-area: one;
`;

export const GridTwo = styled.div`
  ${FeaturedGrid}
  grid-area: two;
`;

export const GridThree = styled.div`
  ${FeaturedGrid}
  grid-area: four;
`;

export const GridFour = styled.div`
  ${FeaturedGrid}
  grid-area: four-low;
`;

export const lilOverlay = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: all 0.3s ease-in;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const OverLay = styled.div`
  ${lilOverlay};
`;

export const Description = styled.p`
  position: absolute;
  bottom: -2rem;
  left: 1rem;

  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 600;

  color: white;

  @media (max-width:${responsiveWidthTablet}px) {
        bottom: 0rem;
        left: 1rem;
        font-size: 1rem;
  }

  @media (max-width:${responsiveWidthMobile}px) {
          left: 0.5rem;
  }
`;

export const CategoryImg = styled.img`
  height: 100%;
  width:100%;
`;
