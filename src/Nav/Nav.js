import React from 'react'
import './Nav.css'
import reel from '../reel2.png'
import FilterForm from '../FilterForm/FilterForm'
import { NavLink } from 'react-router-dom'

const Nav = ({filterGenre}) => {
  return (
    <nav>
      <img src={reel}/>
      <NavLink to='/'>
        <h1>Rancid Tomatillos</h1>
      </NavLink>
      <FilterForm filterGenre={filterGenre}/>
    </nav>
  )
}

export default Nav
