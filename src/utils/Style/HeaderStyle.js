// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/Styles';

// Import Constants
import { headerHeight, responsiveWidthTablet, zIndexHeader } from '../../utils/Constant';

const sideMargin = 20;

export const HeaderWrapper = styled.div`
  ${commonHeaderFooter};
  display: flex;
  flex-direction: column;

  justify-content: center;

  position: fixed;
  top: 0;

  height: ${headerHeight}px;
  
  color: white;

  z-index: ${zIndexHeader};
`;

export const LogoDiv = styled.div`
  position: fixed;

  margin-left: ${sideMargin}px;
`;

export const CartDiv = styled.div`
  display:flex;

  align-items: center;

  position: fixed;
  right: 0;
  
  margin-right: ${sideMargin}px;

  @media (max-width: ${responsiveWidthTablet}px){
    position: static;
  }
`;

export const NavBarDiv = styled.div`
  width: 100%;
`;
