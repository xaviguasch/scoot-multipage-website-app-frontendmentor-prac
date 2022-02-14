import React from 'react'

import Navigation from './Navigation'

import './Header.css'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='Header'>
      <Navigation position='mobile' />
      <LogoIcon />
    </div>
  )
}

export default Header
