// App.tsx
import React from 'react';
import './App.css';
import Bar from './elements/navigation/bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/store';
import Category from './pages/category';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import Footer from './elements/footer/footer';
import banner1 from './elements/products/banner1.jpg';
import banner2 from './elements/products/banner2.png';
import banner3 from './elements/products/banner3.png';

const banners = [banner1, banner2, banner3];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/books' element={<Category banners={banners} category="book" />} />
          <Route path='/vinyls' element={<Category banners={banners} category="vinyl" />} />
          <Route path='/games' element={<Category banners={banners} category="game" />} />
          <Route path='/supplies' element={<Category banners={banners} category="supply" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
