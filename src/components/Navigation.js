import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
  return (
    <div className='Navigation'>
      <h4>Scoot logo</h4>
      <nav>
        <ul>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/location'}>Location</NavLink>
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
