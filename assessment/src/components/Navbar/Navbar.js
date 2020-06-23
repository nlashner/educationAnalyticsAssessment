import React from 'react'
import logo from '../../eAlogo.jpg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img src={logo} alt='education-analytics-logo' className='nav-logo'></img>
      <div>Nora Lashner</div>
    </div>
  )
}

export default Navbar
