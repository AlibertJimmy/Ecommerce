// Import React Library
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import {
  previewSliderElementHeight, previewSliderElementWidth,
  trendingSliderElementHeight, trendingSliderElementPictureHeight,
  trendingSliderElementPictureWidth, trendingSliderElementWidth
} from '../Constant';

const PictureContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureContainerTrendingSlider = styled.div`
  ${PictureContainer};

  height: ${trendingSliderElementHeight}px;
  width: ${trendingSliderElementWidth}px;
`;

export const PictureContainerPreviewSlider = styled.div`
  ${PictureContainer};

  height: ${previewSliderElementHeight}px;
  width: ${previewSliderElementWidth}px;
`;

export const PictureContainerSelector = styled.div`
  ${PictureContainer};

  height: 150px;
`;

export const ArticlePicturePreviewSelection = styled.img`
  max-height: ${trendingSliderElementPictureHeight}px;
  max-width: ${trendingSliderElementPictureWidth}px;
`;

export const StyledLinkShape = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  text-decoration: none;
`;
