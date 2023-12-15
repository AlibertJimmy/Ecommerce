// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

export const ItemSelectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ItemSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width:${responsiveWidthTablet}px) {
        grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width:640px) {
    grid-template-columns: 1fr 1fr;
}

  @media (max-width:${responsiveWidthMobile}px) {
        grid-template-columns: 1fr;
  }
`;

export const ItemPresentation = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  
  height: 260px;
  margin: 10px 16px;
`;

export const ItemDatas = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content: space-between;
  height: 105px;
`;

export const ItemPrice = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 22px;
  margin: 0;
`;
