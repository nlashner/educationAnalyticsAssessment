import React from 'react'
import logo from '../../eAlogo.jpg'
import Print from '../Print/Print'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img src={logo} alt='education-analytics-logo' className='nav-logo'></img>
      <div>Nora Lashner</div>
      <Print />
    </div>
  )
}

export default Navbar
