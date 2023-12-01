// Import React Libraries
import React from 'react';
import { Outlet } from 'react-router';

// Import Components

// Import Datas

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Bedding () {
  return (
      <PageWrapper>
        Bedding
        <Outlet/>
      </PageWrapper>
  );
}

export default Bedding;
