import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'
import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg'

const Navigation = ({ position }) => {
  if (position === 'mobile') {
    return (
      <div className='Navigation'>
        <HamburgerIcon />
      </div>
    )
  }

  return (
    <div className='Navigation'>
      <h4>Scoot logo</h4>
      <nav>
        <ul>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/locations'}>Locations</NavLink>
          </li>
          <li>
            <NavLink to={'/careers'}>Careers</NavLink>
          </li>
        </ul>

        <button>Get Scootin</button>
      </nav>
    </div>
  )
}

export default Navigation
