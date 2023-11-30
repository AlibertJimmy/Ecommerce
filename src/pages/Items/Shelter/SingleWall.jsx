// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components

// Import Functions
import { addToCart } from '../../../utils/CartFunctions/Functions';

// Import Datas
import { singleWallList } from '../../../datas/Shelter/SingleWall';

// Import Style
import styled from 'styled-components';
import { PageWrapper } from '../../../utils/Styles';

const ItemPresentation = styled.div`
  border: 1px solid black;
  border-radius: 15px;

`;

const ItemPicture = styled.img`

`;

const AddToCartButton = styled.button`

`;
const ItemTitle = styled.h1`

`;

const ItemDatas = styled.p`

`;

function ShelterSingleWall ({ cart, updateCart }) {
  console.log('ShelterSingleWall');
  console.log('cart');
  console.log(cart);
  return (
      <PageWrapper>
        {singleWallList.map((item, index) => (
          <ItemPresentation key={index} >
            <ItemTitle>{item.name}</ItemTitle>
            <ItemPicture src={item.picture1} alt='picture1'></ItemPicture>
            <ItemDatas>
              <ul>
                <li>{item.price} euros</li>
              </ul>
            </ItemDatas>
            <AddToCartButton onClick={() => addToCart(cart, updateCart, item)}>Add To Cart</AddToCartButton>
          </ItemPresentation>
        ))}
      </PageWrapper>
  );
}

ShelterSingleWall.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default ShelterSingleWall;
