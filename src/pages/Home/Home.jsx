// Import React Libraries
import React from 'react';

// Import Components
import CategorySelectorGrid from '../../components/Category/CategorySelectorGrid';
import ItemSelector from '../../components/Items/ItemSelector';

// Import Function
import { whatsNewParser } from '../../utils/Functions/noveltyFunctions';

// Import Style
import { PageWrapper } from '../../utils/Styles';

function Home () {
  const newArticleList = whatsNewParser();
  const titleWrapper = 'Our Novelty';

  return (
      <PageWrapper id='pageWrapperHome'>
        <CategorySelectorGrid/>
        <ItemSelector itemList={newArticleList} titleWrapper={titleWrapper}/>
      </PageWrapper>
  );
}

export default Home;
