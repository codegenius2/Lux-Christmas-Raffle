import React from 'react';
import "./Navbar.css"
import logo from '../../assets/logo-lux-blanc.png';

function Navbar() {
  return (
    <section className='navbar-container'>
        <img src={logo} className="lux-logo-navbar"  alt="logo" />
    </section>
  )
}

export default Navbar