import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';
import ContactsMobile from './components/ContactsMobile';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import Basket from './components/Basket';
import Callback from "./components/Callback";
import BurgerMenu from "./components/BurgerMenu";

import './styles/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <Header />
      <BurgerMenu />
      <Basket />
      <Hero />
      <AboutUs />
      <Catalog />
      <Callback />
      <Contacts />
      <ContactsMobile />
      <Footer />
      <FooterMobile />
    </BrowserRouter>
  );
}

export default App;
