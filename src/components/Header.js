import React from 'react'

import { NavLink } from 'react-router-dom'

import Navigation from './Navigation'

import './Header.css'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'

const Header = ({ onHandleNavOpen, mobileNavOpen }) => {
  const handleLogoClick = () => {
    if (mobileNavOpen) {
      onHandleNavOpen()
    }
  }

  return (
    <div className='Header'>
      <Navigation
        placement='header'
        onHandleNavOpen={onHandleNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      <div className='Header__logo-container' onClick={handleLogoClick}>
        <NavLink to={'/home'}>
          <LogoIcon className='Header__logo' />
        </NavLink>
      </div>
    </div>
  )
}

export default Header
