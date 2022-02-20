import React from 'react'

import Navigation from './Navigation'

import './Header.css'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'

const Header = ({ onHandleNavOpen, mobileNavOpen }) => {
  return (
    <div className='Header'>
      <Navigation
        placement='header'
        onHandleNavOpen={onHandleNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      <LogoIcon className='Header__logo' />
    </div>
  )
}

export default Header
