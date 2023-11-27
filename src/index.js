// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';

import Shelter from './pages/Items/Shelter/Shelter';
import ShelterSingleWall from './pages/Items/Shelter/SingleWall';
import ShelterDoubleWall from './pages/Items/Shelter/DoubleWall';

import Bedding from './pages/Items/Bedding/Bedding';
import Hammock from './pages/Items/Bedding/Hammock';
import Mattress from './pages/Items/Bedding/Mattress';
import SleepingBag from './pages/Items/Bedding/SleepingBag';

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
    <React.StrictMode>
    <Router>
        <Header/>
        <HomeWrapper>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shelter" element={<Shelter />} />
              <Route path="/Shelter/SingleWall" element={<ShelterSingleWall />} />
              <Route path="/Shelter/DoubleWall" element={<ShelterDoubleWall />} />

              <Route path="/Bedding" element={<Bedding />} />
              <Route path="/Bedding/SleepingBag" element={<SleepingBag />} />
              <Route path="/Bedding/Mattress" element={<Mattress />} />
              <Route path="/Bedding/Hammock" element={<Hammock />} />

              <Route path="/Account" element={<Account />} />
            </Routes>
          </ContentWrapper>
        </HomeWrapper>
        <Footer/>
    </Router>
  </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
