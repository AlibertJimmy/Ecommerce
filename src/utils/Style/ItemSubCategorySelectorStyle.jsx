// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

export const SubCategorySelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemPreviewContainer = styled.div`
  display:flex;
  
  flex: 0 0 calc(23% - 10px);

  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  
  height: 200px;
  width: 250px;
  
  margin: 10px 16px;

  &:hover{
    outline: 2px solid ${colors.marineBlue};
    box-shadow: none;
  }

  @media (max-width: ${responsiveWidthTablet}px){
    flex: 0 0 calc(45% - 10px);
  }
  @media (max-width: ${responsiveWidthMobile}px){
    flex: 1 0 calc(50% - 10px);
  }
`;
