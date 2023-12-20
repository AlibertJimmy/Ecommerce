// Import Style
import styled from 'styled-components';

// Import Constants
import {
  responsiveWidthMobile, responsiveWidthTablet,
  IllustrationDisplayWidth, IllustrationDisplayWidthResponsiveTablet, IllustrationDisplayWidthResponsiveMobile,
  IllustrationDisplayHeight, IllustrationDisplayHeightResponsiveTablet, IllustrationDisplayHeightResponsiveMobile,
  PicturePreviewWidth, PicturePreviewWidthResponsiveTablet, PicturePreviewWidthResponsiveMobile,
  PicturePreviewHeight, PicturePreviewHeightResponsiveTablet, PicturePreviewHeightResponsiveMobile, PicturelayoutButtonWidth
} from '../Constant';

// Illustration Related

// Page General
export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveWidthTablet}px){
    margin: 0 10px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    justify-content: center;
    margin: 0 10px;
  }
  overflow: hidden;
`;

// Item Presentation
export const ItemPresentation = styled.div`
  margin: 5px 10px;
  width: auto;

  display:flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${responsiveWidthTablet}px){

  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column-reverse;
    align-items: center;
  }
  border: 1px solid pink;
  overflow: hidden;
`;

// Illustration Related
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${responsiveWidthTablet}px){
  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column;
  }
  overflow: hidden;
`;

export const ImageDisplayer = styled.div`
  width: ${IllustrationDisplayWidth}px;
  height: ${IllustrationDisplayHeight}px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${responsiveWidthTablet}px){
    width: ${IllustrationDisplayWidthResponsiveTablet}px;
    height: ${IllustrationDisplayHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${IllustrationDisplayWidthResponsiveMobile}px;
    height: ${IllustrationDisplayHeightResponsiveMobile}px;
  }
  border: 1px solid red;
  overflow: hidden;
`;
//
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
  width: ${IllustrationDisplayWidth - PicturelayoutButtonWidth * 2}px;
  height: ${IllustrationDisplayHeight}px;
`;

export const ItemDetailImage = styled.img`
  max-width: ${IllustrationDisplayWidth - PicturelayoutButtonWidth * 2}px;
  max-height: ${IllustrationDisplayHeight}px;
  object-fit: contain;

  @media (max-width: ${responsiveWidthTablet}px){
    width: ${IllustrationDisplayWidthResponsiveTablet - PicturelayoutButtonWidth * 2}px;
    height: ${IllustrationDisplayHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${IllustrationDisplayWidthResponsiveMobile - PicturelayoutButtonWidth * 2}px;
    height: ${IllustrationDisplayHeightResponsiveMobile}px;
  }
  border: 1px solid green;
  overflow: hidden;
`;

export const ImageSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${IllustrationDisplayWidth}px;

  @media (max-width: ${responsiveWidthTablet}px){
    width: ${IllustrationDisplayWidthResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${IllustrationDisplayWidthResponsiveMobile}px;
  }
`;

export const PictureSelectionPreviewContainer = styled.div`
  width: ${PicturePreviewWidth}px;
  height: ${PicturePreviewHeight}px;

  margin: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${responsiveWidthTablet}px){
    width: ${PicturePreviewWidthResponsiveTablet}px;
    height: ${PicturePreviewHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${PicturePreviewWidthResponsiveMobile}px;
    height: ${PicturePreviewHeightResponsiveMobile}px;
  }
`;

export const PictureSelectionPreview = styled.img`

  max-width: ${PicturePreviewWidth}px;
  max-height: ${PicturePreviewHeight}px;

  @media (max-width: ${responsiveWidthTablet}px){
    width: ${PicturePreviewWidthResponsiveTablet}px;
    height: ${PicturePreviewHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${PicturePreviewWidthResponsiveMobile}px;
    height: ${PicturePreviewHeightResponsiveMobile}px;
  }
`;

// Info Related
// flex: 1;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  width: 15rem;
  padding: 50px;

  @media (max-width: ${responsiveWidthTablet}px){
    padding: 25px;
    width: 12rem;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    padding: 25px;
    width: 15rem;
  }
  border: 1px solid blue;
`;

export const ItemDatas = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledUlInfo = styled.ul`
  display: flex;  
  flex-direction: column;
  gap: 20px;
  padding:0;

  list-style: none;

  font-family: sans-serif;
  font-weight: 600 ;
  font-size: 20px;

  @media (max-width: ${responsiveWidthTablet}px){
    gap: 0;

    li {
      margin: 0;
      p{
        margin: 10px;
      }
    }
  }
  
`;

// Quantity Selection Related
export const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${responsiveWidthTablet}px){
    margin-top:0;
    flex-direction: column;
    align-items: start;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: row;
    align-items: center;
  }
`;

export const QuantitySelectorContainer = styled.div`
  display: flex;
`;

// Item Description Related
export const DescriptionContainer = styled.div`
  width: 80vw;
  @media (max-width: ${responsiveWidthTablet}px){
    margin: 5%;
    width: 90vw;
  }
  @media (max-width: ${responsiveWidthMobile}px){
    margin: 0;
    width: 100%;
  }
  
  border: 1px solid yellow;
`;

export const StyledUlDescription = styled.ul`

`;
