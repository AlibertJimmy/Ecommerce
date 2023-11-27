// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shelter from './pages/Items/Shelter/Shelter';
import ShelterSingleWall from './pages/Items/Shelter/SingleWall';
import ShelterDoubleWall from './pages/Items/Shelter/DoubleWall';
import Bedding from './pages/Items/Bedding';

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
