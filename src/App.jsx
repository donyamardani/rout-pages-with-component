import React, { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthContext from './Utils/AuthContext'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Auth from './Pages/Auth'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'

export default function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      localStorage.removeItem("token");
      setToken(null);
    }
    };
  return (
    <>
    <AuthContext.Provider value={{handleToken,token}}>
<Navbar/>
<main>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductsDetails/:id' element={<ProductDetails/>}/>
        <Route path='/Auth' element={token? <Navigate to={'/'}/>: <Auth/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
</main>      
<Footer/>      
    <Toaster/>
    </AuthContext.Provider>
    </>

  )
}
