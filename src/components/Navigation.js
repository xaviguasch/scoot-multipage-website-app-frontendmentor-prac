import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg'
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg'

const Navigation = ({ placement }) => {
  if (placement === 'header') {
    return (
      <div className='Navigation'>
        <div className='Navigation__header-wrapper'>
          <HamburgerIcon />
        </div>
      </div>
    )
  }

  if (placement === 'footer')
    return (
      <div className='Navigation'>
        <div className='Navigation__footer-wrapper'>
          <LogoIcon className='Navigation__logo' />
          <nav className='nav-footer'>
            <ul>
              <li>
                <NavLink className='NavLink' to={'/about'}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className='NavLink' to={'/locations'}>
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink className='NavLink' to={'/careers'}>
                  Careers
                </NavLink>
              </li>
            </ul>
          </nav>

          <ul className='socials-list'>
            <li className='social-item'>
              <a href='#'>
                <FacebookIcon className='social-icon' />
              </a>
            </li>
            <li className='social-item'>
              <a href='#'>
                <TwitterIcon className='social-icon' />
              </a>
            </li>
            <li className='social-item'>
              <a href='#'>
                <InstagramIcon className='social-icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )

  return (
    <div className='Navigation'>
      <div className='Navigation__footer-mobile-wrapper'>
        <LogoIcon className='Navigation__logo' />
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
    </div>
  )
}

export default Navigation
