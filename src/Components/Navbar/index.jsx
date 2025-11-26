import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from "./style.module.css";
import AuthContext from '../../Utils/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const {token,handleToken}=useContext(AuthContext)
  return (
    <>
    <nav className={style.nav}>
      <h1>E-Commerce</h1>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Products"}>Products</Link></li>
        {token ? <li> <span onClick={()=>{handleToken(null)
          Navigate('/')
        }}>LogOUT</span></li>:<li><Link to={'/Auth'}>SignIn/SignUp</Link></li>}
      </ul>
    </nav>
    </>
  )
}
