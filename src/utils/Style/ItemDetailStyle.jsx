// Import Style
import styled from 'styled-components';
// import colors from '../../utils/Colors';

// Illustration Related
const IllustrationDisplayWidth = 750;
const IllustrationDisplayHeight = 500;

const PicturePreviewWidth = 100;
const PicturePreviewHeight = 100;

export const IllustrationContainer = styled.div`

`;

export const PictureDisplayer = styled.div`
  width: ${IllustrationDisplayWidth}px;
  height: ${IllustrationDisplayHeight}px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const ItemPicture = styled.img`
  max-width: ${IllustrationDisplayWidth}px;
  max-height: ${IllustrationDisplayHeight}px;
  object-fit: contain;
`;

export const PictureSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${IllustrationDisplayWidth}px;
`;

export const PictureSelectionPreviewContainer = styled.div`
  width: ${PicturePreviewWidth}px;
  height: ${PicturePreviewHeight}px;

  margin: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PictureSelectionPreview = styled.img`

  max-width: ${PicturePreviewWidth}px;
  max-height: ${PicturePreviewHeight}px;
`;
