import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg'
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg'

const Navigation = ({ placement, onHandleNavOpen, mobileNavOpen }) => {
  const handleLogoClick = () => {
    console.log(mobileNavOpen)

    onHandleNavOpen()
  }

  const handleCityClick = () => {
    console.log(mobileNavOpen)
    console.log(onHandleNavOpen)

    onHandleNavOpen()
  }

  if (placement === 'header') {
    console.log('props in header: ', onHandleNavOpen, mobileNavOpen)
    return (
      <div className='Navigation'>
        <div className='Navigation__header-wrapper'>
          {mobileNavOpen ? (
            <CloseIcon onClick={handleLogoClick} />
          ) : (
            <HamburgerIcon onClick={handleLogoClick} />
          )}
        </div>
      </div>
    )
  }

  if (placement === 'footer')
    return (
      <div className='Navigation'>
        <div className='Navigation__footer-wrapper'>
          <NavLink to={'/home'}>
            <LogoIcon className='Navigation__logo' />
          </NavLink>
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

  if (placement === 'modal') {
    return (
      <div className='Navigation Navigation--modal'>
        <nav>
          <ul>
            <li>
              <NavLink className='NavLink' to={'/about'} onClick={handleCityClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='NavLink' to={'/locations'} onClick={handleCityClick}>
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink className='NavLink' to={'/careers'} onClick={handleCityClick}>
                Careers
              </NavLink>
            </li>
          </ul>

          <a className='btn' href='#footer__get-scootin' onClick={handleCityClick}>
            Get Scootin
          </a>
        </nav>
      </div>
    )
  }

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
