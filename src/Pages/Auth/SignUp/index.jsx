import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import notify from '../../../Utils/notify';
import useFormFields from '../../../Utils/UseFormFields';
import './style.css'

export default function SignUp({handlePageType}) {
  const [fields,handleChange]=useFormFields(null);
  const dispatch=useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const res=await fetch('https://fakestoreapi.com/users',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(fields)
        })
       
        const data=await res.json()
        
      // 2. Login automatically
      const loginRes = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: fields.username,
          password: fields.password,
        }),
      });

      const loginData = await loginRes.json();
      dispatch(login(loginData.token));

      notify("success", "Account created & logged in");
    } catch (error) {
      notify('error','login failed')
    }
  };
  return (
    <>
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <span className='change-type' onClick={handlePageType}>Do you Have an Account?Click Here</span>

      </form>
    </div>
    </>
  )
}
