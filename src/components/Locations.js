import React from 'react'

import './Locations.css'

import worldMapMobile from '../assets/images/world-map-mobile.png'
import worldMapTablet from '../assets/images/world-map-tablet.png'
import worldMapDesktop from '../assets/images/world-map-desktop.png'

const Locations = () => {
  return (
    <div className='Locations'>
      <section className='banner banner--careers'>
        <h2 className='title'>Locations</h2>
      </section>
      <section className='main main--locations'>
        <div className='main__f'>
          <div className='main__f__world'>
            <img className='world-map--mobile' src={worldMapMobile} alt='world map' />
            <img className='world-map--tablet' src={worldMapTablet} alt='world map' />
            <img className='world-map--desktop' src={worldMapDesktop} alt='world map' />

            <ul className='mobile-map-cities-list'>
              <li className='city' id='ny-in-map'>
                New York
              </li>
              <li className='city' id='london-in-map'>
                London
              </li>
              <li className='city' id='jakarta-in-map'>
                Jakarta
              </li>
              <li className='city' id='yokohama-in-map'>
                Yokohama
              </li>
            </ul>
          </div>

          <div className='main__f__copy'>
            <h2 className='title title--md'>Your city not listed?</h2>
            <p className='text text--alt'>
              If you’d like to see Scoot in your hometown, be sure to let us know. We
              track requests and plan launches based on demand. Feel free to message us by
              clicking the link or messaging us on social.
            </p>
            <a className='btn' href='#'>
              Message us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
