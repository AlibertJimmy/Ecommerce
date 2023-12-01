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

import Shelter from './pages/Items/Shelter';
import Bedding from './pages/Items/Bedding';
import ItemCategoryPage from './pages/Items/ItemCategory';

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

                  <Route path="Shelter" element={<Shelter />} >
                    <Route path="SingleWall" element={<ItemCategoryPage itemCategory='Shelter' itemSubCategory='SingleWall'/>} />
                    <Route path="DoubleWall" element={<ItemCategoryPage itemCategory='Shelter' itemSubCategory='DoubleWall'/>} />
                  </Route>

                  <Route path="Bedding" element={<Bedding />} >
                    <Route path="SleepingBag" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='SleepingBag'/>} />
                    <Route path="Mattress" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='Mattress'/>} />
                    <Route path="Hammock" element={<ItemCategoryPage itemCategory='Bedding' itemSubCategory='Hammock'/>} />
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
