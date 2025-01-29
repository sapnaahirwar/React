import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import './App.css'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';
import NoPage from './Pages/NoPage';
import AboutCompany from './Pages/AboutCompany';
import AboutProducts from './Pages/AboutProducts';
import AboutService from './Pages/AboutService';

const App = ()  => {
  return(
    <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />}>
            <Route index element={<AboutCompany />} />
              <Route path="aboutcompany" element={<AboutCompany />} />
              <Route path="aboutcontact" element={<AboutProducts />} />
              <Route path="aboutservice" element={<AboutService />} />
            </Route>
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
