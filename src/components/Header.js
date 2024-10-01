import React from 'react'
import logo from "../utils/images/logo.png"
const Header = () => {
  return (
    <div > 
      <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10'>
       <img src={logo} alt="logo" className='h-20 w-44 '/>
       

       </div>
    </div>
  )
}

export default Header
