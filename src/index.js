// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Context
import { NavContextProvider, CartContextProvider } from './context';

// Import Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';

import ItemCategoryPage from './pages/Items/ItemCategory';
import ItemSubcategoryPage from './components/Category/SubCategory';
import ItemDetailPage from './pages/Items/ItemDetail';

// Import Style
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;  
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

function App () {
  return (
    <NavContextProvider>
      <CartContextProvider>
        <React.StrictMode>
          <Router>
            <Header/>
            <HomeWrapper>
              <ContentWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="Shelter" element={<ItemSubcategoryPage itemCategory='Shelter'/>} >
                    <Route path="SingleWall" element={<ItemCategoryPage itemCategory='Shelter' itemSubCategory='SingleWall'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='SingleWall'/>}/>
                    </Route>
                    <Route path="DoubleWall" element={<ItemCategoryPage itemCategory='Shelter' itemSubCategory='DoubleWall'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='DoubleWall'/>}/>
                    </Route>
                    <Route path="Accessory" element={<ItemCategoryPage itemCategory='Shelter' itemSubCategory='Accessory'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='Accessory'/>}/>
                    </Route>
                  </Route>

                  <Route path="Bedding" element={<ItemSubcategoryPage itemCategory='Bedding'/>} >
                    <Route path="SleepingBag" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='SleepingBag'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='SleepingBag'/>}/>
                    </Route>
                    <Route path="Mattress" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='Mattress'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='Mattress'/>}/>
                    </Route>
                    <Route path="Hammock" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='Hammock'/>}>
                      <Route path=":index" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='Hammock'/>}/>
                    </Route>
                  </Route>

                  <Route path="/Account" element={<Account />} />
                </Routes>
              </ContentWrapper>
            </HomeWrapper>
            <Footer/>
        </Router>
      </React.StrictMode>
    </CartContextProvider>
  </NavContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
