// Import React Libraries
import React from 'react';
import { Outlet } from 'react-router';

// Import Components

// Import Datas

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Shelter () {
  return (
      <PageWrapper>
        Shelter
      <Outlet/>
      </PageWrapper>
  );
}

export default Shelter;
