// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Nav Context
const PreviewSliderContext = createContext();

export const PreviewSliderContextProvider = ({ children }) => {
  const [pictureToDisplayIndex, setPictureToDisplayIndex] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem('pictureToDisplayIndex');
    const savedIndex = JSON.parse(json);
    if (savedIndex) {
      setPictureToDisplayIndex(savedIndex);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(pictureToDisplayIndex);
    localStorage.setItem('pictureToDisplayIndex', json);
  }, [pictureToDisplayIndex]);

  const contextValue = {
    pictureToDisplayIndex,
    setPictureToDisplayIndex
  };

  return <PreviewSliderContext.Provider value={contextValue}>{children}</PreviewSliderContext.Provider>;
};

PreviewSliderContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const usePreviewSliderContext = () => {
  return useContext(PreviewSliderContext);
};
