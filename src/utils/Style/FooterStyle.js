// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../Styles';

// Import Colors
import colors from '../Colors';

// Import Constants
import { footerHeight } from '../Constant';

export const StyledFooter = styled.div`
    ${commonHeaderFooter};
    height: ${footerHeight}px;
    width: 100%;

    flex-direction: row;
    align-items:center;

    justify-content: space-between;

    color: ${colors.link};
`;

export const StyledText = styled.div`
      display:flex;
      flex-direction: column;
      text-align:center;
`;

export const StyledP = styled.p`
    font-size: 15px;
    margin: 5px;
`;

export const StyledButton = styled.button`
  border: none;  
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;

`;
