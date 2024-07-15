import React from 'react'
import logo from '../../assets/HorseLogo.png'
import BeigeButton from '../BeigeButton'
import './Navbar.css'
import BrownButton from '../BrownButton'

const Navbar = () => {
  return (
    <nav>
      <div className='nav--1'>
        <img src={ logo } alt='logo' className='nav--img'/>
        <h2>Horse Haven</h2>
      </div>
      <div className='nav--2'>
        <BeigeButton text={"About Us"} className='nav--2--items' />
        <BrownButton text={"Services"} className='nav--2--items' />
      </div>
    </nav>
  )
}

export default Navbar
