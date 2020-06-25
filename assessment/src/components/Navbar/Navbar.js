import React from 'react'
import logo from '../../EAlogo.png'
import { AiOutlineFilePdf, AiFillPrinter } from 'react-icons/ai'
import './navbar.css'

const Navbar = (props) => {
  const { savePDF } = props
  return (
    <div className='nav-container'>
      <div className='nav-left'>
      <img src={logo} alt='education-analytics-logo' className='nav-logo'></img>
      <div className='nav-name'>Nora Lashner</div>
      </div>
      <div className='nav-right'>
      <AiOutlineFilePdf className='nav-icon' onClick={savePDF}/>
      <AiFillPrinter className='nav-icon' onClick={() => window.print()}/>
      </div>
    </div>
  )
}

export default Navbar
