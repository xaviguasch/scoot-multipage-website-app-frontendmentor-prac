import React from 'react'

import Navigation from './Navigation'

import './Footer.css'

// Imported icons and patterns
import { ReactComponent as AppStoreIcon } from '../assets/icons/app-store.svg'
import { ReactComponent as GooglePlayIcon } from '../assets/icons/google-play.svg'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='footer__main' id='footer__get-scootin'>
        <h2 className='title title--md title--footer'>Sign up and Scoot off today</h2>

        <div className='icons-area'>
          <a href='#'>
            <div className='icon-container-apple-store-icon'>
              <AppStoreIcon className='icon-footer' />
            </div>
          </a>
          <a href='#'>
            <div className='icon-container-google-icon'>
              <GooglePlayIcon className='icon-footer' />
            </div>
          </a>
        </div>
      </div>

      <Navigation placement='footer' />
    </footer>
  )
}

export default Footer
