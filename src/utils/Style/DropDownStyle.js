// Import React Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Style
import styled from 'styled-components';
import { commonWriting } from './GlobalStyle';

export const DropDownSpan = styled.span`
  ${commonWriting};
  display: flex;
`;

export const DropdownContainer = styled.div`

`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
  border: 1px solid green;
`;

export const DropDownStyledIcon = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10px;

  margin-left: 5px;
`;
