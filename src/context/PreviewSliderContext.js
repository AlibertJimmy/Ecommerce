// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Constants
import { previewSliderAmountOfPictureDisplayed } from '../utils/Constant';

// Nav Context
const PreviewSliderContext = createContext();

export const PreviewSliderContextProvider = ({ children }) => {
  const [pictureToDisplayIndex, setPictureToDisplayIndex] = useState(0);
  const [scopeStart, setScopeStart] = useState(0);
  const [scopeEnd, setScopeEnd] = useState(previewSliderAmountOfPictureDisplayed - 1);

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
    setPictureToDisplayIndex,
    scopeStart,
    setScopeStart,
    scopeEnd,
    setScopeEnd
  };

  return <PreviewSliderContext.Provider value={contextValue}>{children}</PreviewSliderContext.Provider>;
};

PreviewSliderContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const usePreviewSliderContext = () => {
  return useContext(PreviewSliderContext);
};
