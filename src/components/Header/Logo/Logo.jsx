// Import React Librairies
import React from 'react';
//  Import Asset
import LogoPNG from '../../../assets/Logo/Logo.png';
// Import Style
import styled from 'styled-components';
import { headerHeight } from '../../../utils/Constant';

const SizedIMG = styled.img`
    width: ${headerHeight * 4}px;
    height: ${headerHeight}px;
    background: transparent;
`;

function Logo () {
  return (
        <div id='logoContainer'>
          <SizedIMG src={LogoPNG} alt='Logo'></SizedIMG>
        </div>
  );
}

export default Logo;
