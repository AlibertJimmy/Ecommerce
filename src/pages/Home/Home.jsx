// Import React Libraries
import React from 'react';

// Import Components
import CategorySelectorGrid from '../../components/Category/CategorySelectorGrid';
import WhatsNewDisplay from '../../components/NewArticleDisplay/NewArticleDisplay';
// Import Datas

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Home () {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  return (
      <PageWrapper>
        <div>{`screenWidth : ${screenWidth} |screenHeight : ${screenHeight} `}</div>
        <CategorySelectorGrid/>
        <WhatsNewDisplay/>
      </PageWrapper>
  );
}

export default Home;
