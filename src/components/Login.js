import React, { useState } from 'react'
import logo from "../utils/images/logo.png"
import Header from "./Header";

const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);

  const toggle=()=>{
    setisSignInForm(!isSignInForm)
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg"alt="netflix-background"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
      <h1 className='py-4 text-xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm &&(
      <input 
      type='text' 
      placeholder='Name'
       className='p-2 my-2 w-full bg-gray-700'/>
       )}
      <input 
      type='text' 
      placeholder='Email Address'
       className='p-2 my-2 w-full bg-gray-700'/>
      <input 
      type='password'
       placeholder='Password' 
        className='p-2 my-2 w-full bg-gray-700'/>

      <button className='p-4 my-6 bg-red-700 w-full rounded-lg' >{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggle}>
      {isSignInForm?" New to Netflix? Sign Up Now":"Already registered? sign In now..."}
       </p>

      </form>
    </div>
  )
}

export default Login
