import React, { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Auth from './Pages/Auth'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import { useSelector } from 'react-redux'
import Cart from './Pages/Cart';

export default function App() {
  const {token}=useSelector(state=>state.auth)

  return (
    <>
    
<Navbar/>
<main>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductDetails/:id/:name' element={<ProductDetails/>}/>
        <Route path='/Auth' element={token? <Navigate to={'/'}/>: <Auth/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
</main>      
<Footer/>      
    <Toaster/>
   
    </>

  )
}
