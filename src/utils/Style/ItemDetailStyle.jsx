// Import Style
import styled from 'styled-components';
import { CommonButton, CommonQuantitySelectorStyle } from '../Styles';

// Import Constants
import {
  responsiveWidthMobile, responsiveWidthTablet,
  IllustrationDisplayWidth, IllustrationDisplayWidthResponsiveTablet, IllustrationDisplayWidthResponsiveMobile,
  IllustrationDisplayHeight, IllustrationDisplayHeightResponsiveTablet, IllustrationDisplayHeightResponsiveMobile,
  PicturePreviewWidth, PicturePreviewWidthResponsiveTablet, PicturePreviewWidthResponsiveMobile,
  PicturePreviewHeight, PicturePreviewHeightResponsiveTablet, PicturePreviewHeightResponsiveMobile
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
`;

// Item Presentation
export const ItemPresentation = styled.div`
  margin: 5px 10px;
  width: auto;

  display:flex;
  flex-direction: row;

  border-radius: 15px;

  @media (max-width: ${responsiveWidthTablet}px){

  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column-reverse;
  }
`;

// Illustration Related
export const IllustrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${responsiveWidthTablet}px){
  }

  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column;
  }
`;

export const PictureDisplayer = styled.div`
  width: ${IllustrationDisplayWidth}px;
  height: ${IllustrationDisplayHeight}px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  @media (max-width: ${responsiveWidthTablet}px){
    width: ${IllustrationDisplayWidthResponsiveTablet}px;
    height: ${IllustrationDisplayHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${IllustrationDisplayWidthResponsiveMobile}px;
    height: ${IllustrationDisplayHeightResponsiveMobile}px;
  }
`;

export const ItemDetailPicture = styled.img`
  max-width: ${IllustrationDisplayWidth}px;
  max-height: ${IllustrationDisplayHeight}px;
  object-fit: contain;

  @media (max-width: ${responsiveWidthTablet}px){
    width: ${IllustrationDisplayWidthResponsiveTablet}px;
    height: ${IllustrationDisplayHeightResponsiveTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    width: ${IllustrationDisplayWidthResponsiveMobile}px;
    height: ${IllustrationDisplayHeightResponsiveMobile}px;
  }
`;

export const PictureSelector = styled.div`
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
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;

  @media (max-width: ${responsiveWidthTablet}px){
    padding: 25px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    padding: 25px;
  }
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

export const QuantityButton = styled.button`
  ${CommonButton};
  font-weight: bold;
  width: 25px;

  
`;

export const QuantityP = styled.p`
  ${CommonQuantitySelectorStyle};
  width: 45px;
`;

export const AddToCartButton = styled.button`
  ${CommonButton};

  @media (max-width: ${responsiveWidthTablet}px){
    margin-top: 10px;
  }
  
  @media (max-width: ${responsiveWidthMobile}px){
    margin-left: 15%;
    margin-top: 0;
    width: 100px;
  }
`;

// Item Description Related
export const DescriptionContainer = styled.div`
  @media (max-width: ${responsiveWidthTablet}px){
    margin: 5%;
  }
`;

export const StyledUlDescription = styled.ul`

`;
