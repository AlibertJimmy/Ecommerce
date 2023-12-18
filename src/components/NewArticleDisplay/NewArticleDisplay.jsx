// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Context

// Import Components

// Import Functions
import { whatsNewParser } from '../../utils/Functions/noveltyFunctions';

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet, verticalMargin } from '../../utils/Constant';
import { scrollToTop } from '../../utils/Functions';

const WhatsNewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${verticalMargin}px;
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width:${responsiveWidthTablet}px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width:640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width:${responsiveWidthMobile}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledTitle = styled.h1`
  font-family: sans-serif;
  color: ${colors.orangeCustom};
  margin-left: 1%;
`;

const ItemPresentation = styled.div`
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
  display:flex;
  flex-direction: column;
  height: 250px;
  margin: 10px 16px;

  @media (max-width: ${responsiveWidthTablet}px){
    flex: 0 0 calc(45% - 10px);
  }
  @media (max-width: ${responsiveWidthMobile}px){
    flex: 1 0 calc(50% - 10px);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
`;

const ItemPicture = styled.img`
  max-width: 150px;
  max-height: 150px;

`;

const ItemTitle = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 150;
`;

const ItemDatas = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content:space-between;
  height: 100px;
`;

function WhatsNewDisplay () {
  function handleOnClick () {
    scrollToTop();
  }
  const newArticleList = whatsNewParser();

  return (
      <WhatsNewWrapper id='whatsNewWrapper'>
        <StyledTitle>Our Novelty</StyledTitle>
        <PageContainer id='pageContainer'>
        {newArticleList.map((item, index) => (

          <ItemPresentation key={index} id='itemPresentation'>
            <StyledLink key={index} to={`/${newArticleList[index].category}/${newArticleList[index].subCategory}/${newArticleList[index].id}`} onClick={handleOnClick}>
            <PictureContainer id='pictureContainer'>
              <ItemPicture src={item.illustrations[0].picture} alt='picture1'></ItemPicture>
            </PictureContainer>
            <ItemDatas id='itemDatas'>
              <ItemTitle>{item.name}</ItemTitle>
            </ItemDatas>
            </StyledLink>
          </ItemPresentation>

        ))}
        </PageContainer>
      </WhatsNewWrapper>
  );
}

export default WhatsNewDisplay;
