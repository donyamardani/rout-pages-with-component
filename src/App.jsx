import React, { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthContext from './Utils/AuthContext'

export default function App() {
  const [token,setToken]=useState(null);
  const handleToken=(tk)=>{
    setToken(tk)
  }
  return (
    <>
    <AuthContext.Provider value={{handleToken,token}}>

      <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      
    <Toaster/>
    </AuthContext.Provider>
    </>

  )
}
