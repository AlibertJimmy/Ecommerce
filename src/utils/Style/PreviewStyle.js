// Import React Library
import { Link } from 'react-router-dom';

// Import Style
import styled from 'styled-components';

// Import Constants
import { trendingSliderElementHeight, trendingSliderElementPictureHeight, trendingSliderElementPictureWidth, trendingSliderElementWidth } from '../Constant';

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${trendingSliderElementHeight}px;
  width: ${trendingSliderElementWidth}px;
`;

export const PictureContainerSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
  width: 100%;
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
