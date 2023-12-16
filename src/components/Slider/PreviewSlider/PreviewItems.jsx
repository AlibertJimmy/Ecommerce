// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { ItemContainer, PreviewPictureContainer, ArticlePicturePreviewSelection } from '../../../utils/Style/PreviewSliderStyle';

// Import Style
function PreviewItem ({ pictureList, setImage }) {
  console.log('pictureList');
  console.log(pictureList);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <>
      {pictureList.map((item, index) => (
        <ItemContainer key={index} id='itemContainer'>
            <PreviewPictureContainer id='pictureContainer'>
              <ArticlePicturePreviewSelection src={pictureList[index].picture} alt='product' onMouseOver={changeImage}/>
            </PreviewPictureContainer>
        </ItemContainer>
      ))}
    </>
  );
}

PreviewItem.propTypes = {
  pictureList: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired
};

export default PreviewItem;
