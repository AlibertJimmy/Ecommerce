// Import React Libraries
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Context
import { NavContextProvider } from './context';

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

// Import Functions
import { isValidCartItem } from './utils/CartFunctions/Functions';

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
  console.log('App');
  const savedCart = localStorage.getItem('cart');
  console.log('savedCart');
  console.log(savedCart);
  const [cart, updateCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Check if savedCart is not null and is a valid JSON string
  useEffect(() => {
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('parsedCart');
        console.log(parsedCart);
        // Check if parsedCart is an array and has the desired structure
        if (Array.isArray(parsedCart) && parsedCart.every(item => isValidCartItem(item))) {
          updateCart(parsedCart);
          console.log('Cart data is valid:', parsedCart);
        } else {
          console.error('Invalid cart format:', parsedCart);
        }
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    } else {
      console.error('No cart data found in local storage');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  console.log('cart', cart);

  return (
    <NavContextProvider>
      <React.StrictMode>
        <Router>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} updateCart={updateCart}/>
          <HomeWrapper>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shelter" element={<Shelter />} />
                <Route path="/Shelter/SingleWall" element={<ShelterSingleWall cart={cart} updateCart={updateCart}/>} />
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
  </NavContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
