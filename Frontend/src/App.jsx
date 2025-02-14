import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Layout from './layout/user/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Profile from './pages/Profile/Profile'
import Wishlist from './pages/Wishlist/Wishlist'
import Orders from './pages/Orders/Orders'
import Auth from './pages/Auth/Auth'
import Compare from './pages/Compare/Compare'
import NotFound from './pages/NotFound/NotFound'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='product' element={<Product/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='wishlist' element={<Wishlist/>} />
      <Route path='orders' element={<Orders/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='compare' element={<Compare/>}/>
      <Route path='auth' element={<Auth/>} />
      </Route>
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
