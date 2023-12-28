import React from 'react'
import logo from '../assets/images/footerlogo.png'

const Preloader = () => {
  return (
    <div>
      <div className="bg-textgradient h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
        <img className=' animate-ping-slow' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Preloader