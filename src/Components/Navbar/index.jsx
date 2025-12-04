import React  from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from "./style.module.css";
import { useDispatch,useSelector } from 'react-redux';
import { login,logout } from '../../Store/Slices/AuthSlice';


export default function Navbar() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {token}=useSelector(state=>state.auth)
  return (
    <>
    <nav className={style.nav}>
      <h1>E-Commerce</h1>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Products"}>Products</Link></li>
        {token ? <li> <span onClick={()=>{dispatch(logout())
          navigate('/')
        }}>LogOut</span></li>:<li><Link to={'/Auth'}>SignIn/SignUp</Link></li>}
      </ul>
    </nav>
    </>
  )
}
