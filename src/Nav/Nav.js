import React from 'react'
import FilterForm from '../FilterForm/FilterForm'
import { NavLink } from 'react-router-dom'
import reel from '../reel2.png'
import './Nav.css'

const Nav = ({filterGenre}) => {
  return (
    <nav>
      <img src={reel} alt='Movie reel'/>
      <NavLink to='/'>
        <h1>Rancid Tomatillos</h1>
      </NavLink>
      <FilterForm filterGenre={filterGenre} />
    </nav>
  )
}

export default Nav;
