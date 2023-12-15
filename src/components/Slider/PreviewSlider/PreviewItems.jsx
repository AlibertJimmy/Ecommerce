// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { ItemContainer, PreviewPictureContainer, ArticlePicturePreviewSelection } from '../../../utils/Style/PreviewSliderStyle';

// Import Style
function PreviewItem ({ pictureList }) {
  console.log('pictureList');
  console.log(pictureList);
  return (
    <>
      {pictureList.map((item, index) => (
        <ItemContainer key={index} id='itemContainer'>
            <PreviewPictureContainer id='pictureContainer'>
              <ArticlePicturePreviewSelection src={pictureList[index].picture} alt='product' />
            </PreviewPictureContainer>
        </ItemContainer>
      ))}
    </>
  );
}

PreviewItem.propTypes = {
  itemCategory: PropTypes.string.isRequired,
  pictureList: PropTypes.array.isRequired
};

export default PreviewItem;
