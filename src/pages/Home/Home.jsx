// Import React Libraries
import React from 'react';

// Import Components
import Category from '../../components/Category/Category';
import WhatsNewDisplay from '../../components/NewArticleDisplay/NewArticleDisplay';
// Import Datas

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Home () {
  return (
      <PageWrapper>
        <Category/>
        <WhatsNewDisplay/>
      </PageWrapper>
  );
}

export default Home;
