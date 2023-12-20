// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Context
import { usePreviewSliderContext } from '../../../context/PreviewSliderContext';

// Import Style
import { ItemContainer, ArticlePicturePreviewSelection, PictureContainer } from '../../../utils/Style/PreviewSliderStyle';

// Import Style
function PreviewItem ({ pictureList, setImage }) {
  const { pictureToDisplayIndex, setPictureToDisplayIndex } = usePreviewSliderContext();
  // console.log('pictureList');
  // console.log(pictureList);

  const changeImage = (e, index) => {
    setImage(e.target.src);
    setPictureToDisplayIndex(index);
    // console.log(`index of the selected picture : ${index}`);
  };

  return (
    <>
      {pictureList.map((item, index) => (
        <ItemContainer key={index} id='itemContainer'
        style={{ outline: index === pictureToDisplayIndex ? '2px solid rgba(0, 0, 0, .6)' : 'none' }}
        onMouseOver={(e) => changeImage(e, index)}>
          <PictureContainer>
            <ArticlePicturePreviewSelection src={pictureList[index].picture} alt='product' />
          </PictureContainer>
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
