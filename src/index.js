import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductExplore from './ProductExplore';
import Eyeclic from './Eyeclic';
import Header from './Header';
import Footer from './Footer';
import HeroSlider from './HeroSlider';
import HeroSlider2 from './HeroSlider2';
import BrandCarousel from './BrandCarousel';
import Wishlist from './wishlist';
import SingleProduct from './Single_Product';
import Cart from './cart';
import Checkout from './Checkout';
import Lenses from './lenses';
import Accessories from './accessories';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routers = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/product-explore', element: <ProductExplore /> },
  { path: '/eyeclic', element: <Eyeclic /> },
  { path: '/header', element: <Header /> },
  { path: '/footer', element: <Footer /> },
  { path: '/hero-slider', element: <HeroSlider /> },
  { path: '/hero-slider-2', element: <HeroSlider2 /> },
  { path: '/brand-carousel', element: <BrandCarousel /> },
  { path: '/Product_Explore', element: <ProductExplore />},
  { path: '/Single_Product', element: <SingleProduct />},
  { path: '/wishlist', element: <Wishlist />},
  { path: '/cart' , element: <Cart />},
  { path: '/checkout' , element: <Checkout />},
  { path: '/lenses' , element: <Lenses />},
  { path: '/accessories' , element: <Accessories />},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />

  </React.StrictMode>
);