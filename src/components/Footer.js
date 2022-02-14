import React from 'react'

import './Footer.css'

import Navigation from './Navigation'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='footer__main'>
        <h2 className='title title--md title--footer'>Sign up and Scoot off today</h2>

        <div className='buttons-area'>
          <button className='btn'>AppStore</button>
          <button className='btn'>GooglePlay</button>
        </div>
      </div>

      <Navigation />
    </footer>
  )
}

export default Footer
