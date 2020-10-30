import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Router Pages
import AllProducts from './Pages/AllProducts';
import SingleProduct from './Pages/SingleProduct';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

// Header and Footer
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Stylesheet
import { Container, Content } from './style';

const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default Router;
