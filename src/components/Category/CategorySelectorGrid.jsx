// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import cookingCategory from '../../assets/Items/Category_Pictures/Cooking_Category.jpg';
import portageCategory from '../../assets/Items/Category_Pictures/Portage_Category.jpg';
import shelterCategory from '../../assets/Items/Category_Pictures/Shelter_Category.jpg';
import beddingCategory from '../../assets/Items/Category_Pictures/Bedding_Category.jpg';

// Import Style
import {
  GridWrapper, GridContainer,
  GridOne, GridTwo, GridThree, GridFour,
  OverLay, CategoryImg, Description

} from '../../utils/Style/CategorySelectorGridStyle';

function CategorySelectorGrid () {
  return (
    <GridWrapper id='gridWrapper'>
      <GridContainer id='gridContainer'>
        <GridOne id='gridOne'>
          <Link to="/Shelter">
            <OverLay id="img1"></OverLay>
            <CategoryImg src={shelterCategory} alt="img1" />
            <Description className="main-description">Shelter</Description>
          </Link>
        </GridOne>
        <GridTwo id='gridTwo'>
          <Link to="/Cooking">
            <OverLay id="img2"></OverLay>
            <CategoryImg src={cookingCategory} alt="img2" />
            <Description className="main-description">Cooking</Description>
          </Link>
        </GridTwo>
        <GridThree id='gridThree'>
          <Link to="/Portage">
            <OverLay id="img3"></OverLay>
            <CategoryImg src={portageCategory} alt="img3" />
            <Description className="main-description">Portage</Description>
          </Link>
        </GridThree>
        <GridFour id='gridFour'>
          <Link to="/Bedding">
            <OverLay id="img4"></OverLay>
            <CategoryImg src={beddingCategory} alt="img4" />
            <Description className="main-description">Bedding</Description>
          </Link>
        </GridFour>
      </GridContainer>
    </GridWrapper>
  );
}

export default CategorySelectorGrid;
