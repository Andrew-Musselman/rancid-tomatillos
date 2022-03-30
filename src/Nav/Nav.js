import React from 'react'
import './Nav.css'
import reel from '../reel2.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <img src={reel}/>
      <NavLink to='/'>
        <h1>Rancid Tomatillos</h1>
      </NavLink>
    </nav>
  )
}

export default Nav
