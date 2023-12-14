// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import cookingCategory from '../../assets/Items/Category_Pictures/Cooking_Category.jpg';
import portageCategory from '../../assets/Items/Category_Pictures/Portage_Category.jpg';
import shelterCategory from '../../assets/Items/Category_Pictures/Shelter_Category.jpg';
import beddingCategory from '../../assets/Items/Category_Pictures/Bedding_Category.jpg';

// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../utils/Constant';

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 10px 19px;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'one two four' 'one two four-low';
  gap: 1.3rem;

  @media (max-width:750px) {
        height: 500px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
            "one two"
            "four four-low";
        grid-gap: 13px;
        gap: 13px;
  }


`;

const FeaturedGrid = css`
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const GridOne = styled.div`
  ${FeaturedGrid}
  grid-area: one;
`;

const GridTwo = styled.div`
  ${FeaturedGrid}
  grid-area: two;
`;

const GridFour = styled.div`
  ${FeaturedGrid}
  grid-area: four;
`;

const GridFourLow = styled.div`
  ${FeaturedGrid}
  grid-area: four-low;
`;

const lilOverlay = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;
`;

const OverLay = styled.div`
  ${lilOverlay};
`;

const Description = styled.p`
  position: absolute;
  bottom: -2rem;
  left: 1rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  font-family: sans-serif;

  @media (max-width:${responsiveWidthTablet}px) {
        bottom: 1rem;
        left: 1rem;
        font-size: 3rem;
  }

  @media (max-width:${responsiveWidthMobile}px) {
          bottom: 1rem;
          left: 0.5rem;
          font-size: 1.5rem;
  }
`;

const CategoryImg = styled.img`
  height: 100%;
  width:100%;
`;

function CategorySelectorGrid () {
  return (
    <Container id='container'>
      <GridContainer id='gridContainer'>
        <GridOne id='featuredGridOne'>
          <Link to="/Shelter">
            <OverLay id="img1"></OverLay>
            <CategoryImg src={shelterCategory} alt="img1" />
            <Description className="main-description">Shelter</Description>
          </Link>
        </GridOne>
        <GridTwo id='featuredGridTwo'>
          <Link to="/Cooking">
            <OverLay id="img2"></OverLay>
            <CategoryImg src={cookingCategory} alt="img2" />
            <Description className="main-description">Cooking</Description>
          </Link>
        </GridTwo>
        <GridFour id='featuredGridFour'>
          <Link to="/Portage">
            <OverLay id="img3"></OverLay>
            <CategoryImg src={portageCategory} alt="img3" />
            <Description className="main-description">Portage</Description>
          </Link>
        </GridFour>
        <GridFourLow id='featuredGridFourLow'>
          <Link to="/Bedding">
            <OverLay id="img4"></OverLay>
            <CategoryImg src={beddingCategory} alt="img4" />
            <Description className="main-description">Bedding</Description>
          </Link>
        </GridFourLow>
      </GridContainer>
    </Container>
  );
}

export default CategorySelectorGrid;
