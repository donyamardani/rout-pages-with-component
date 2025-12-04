import React, { useContext } from 'react'
import useFormFields from '../../../Utils/UseFormFields';
import { useDispatch,useSelector } from 'react-redux';
import { login} from '../../../Store/Slices/AuthSlice';
import notify from '../../../Utils/notify';
import './style.css'

export default function SignIn({handlePageType}) {
  const [fields,handleChange]=useFormFields();
  const dispatch=useDispatch()
  const {token}=useSelector(state=>state.auth)
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await fetch('https://fakestoreapi.com/auth/login',{
         method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(fields)
      })
      const data=await res.json()
      notify('success','login sucsessfule')
      dispatch(login(data.token))
    } catch (error) {
      notify('error','login failed');
    }
  }

  return (
    <>
    
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="input-group">
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="email"
            onChange={handleChange}
            required
            name='username'
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
            name='password'
          />
        </div>
        <button type="submit">Sign In</button>
        <span className='change-type' onClick={handlePageType}>Don't Have an Account?Click Here</span>
      </form>
    </div>
    </>
  )
}
