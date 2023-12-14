// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

export const SubCategorySelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
  justify-content: center;
  @media (max-width: ${responsiveWidthTablet}px){
    justify-content: flex-start;
  }
`;

export const ItemPreviewContainer = styled.div`
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  display:flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 calc(23% - 10px);
  width: 250px;
  height: 200px;
  margin: 10px 16px;

  @media (max-width: ${responsiveWidthTablet}px){
    flex: 0 0 calc(45% - 10px);
  }
  @media (max-width: ${responsiveWidthMobile}px){
    flex: 1 0 calc(50% - 10px);
  }
`;
