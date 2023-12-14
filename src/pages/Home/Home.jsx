// Import React Libraries
import React from 'react';

// Import Components
import CategoryGrid from '../../components/Category/CategoryGrid';
import WhatsNewDisplay from '../../components/NewArticleDisplay/NewArticleDisplay';
// Import Datas

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Home () {
  return (
      <PageWrapper>
        <CategoryGrid/>
        <WhatsNewDisplay/>
      </PageWrapper>
  );
}

export default Home;
