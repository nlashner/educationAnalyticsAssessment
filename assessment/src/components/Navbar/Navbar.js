import React from 'react'
import logo from '../../eAlogo.jpg'
import Print from '../Print/Print'
import { AiOutlineFilePdf } from 'react-icons/ai'
import './navbar.css'

const Navbar = (props) => {
  const { savePDF } = props
  return (
    <div className='nav-container'>
      <img src={logo} alt='education-analytics-logo' className='nav-logo'></img>
      <div>Nora Lashner</div>
      <AiOutlineFilePdf onClick={savePDF}/>
      <Print />
    </div>
  )
}

export default Navbar
