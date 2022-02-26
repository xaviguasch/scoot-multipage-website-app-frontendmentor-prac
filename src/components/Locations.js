import React from 'react'

import './Locations.css'

import worldMap from '../assets/images/world-map-mobile.png'

const Locations = () => {
  return (
    <div className='Locations'>
      <section className='banner banner--careers'>
        <h2 className='title'>Locations</h2>
      </section>
      <section className='main main--locations'>
        <div className='main__f'>
          <div className='main__f__world'>
            <img src={worldMap} alt='world map' />

            <ul className='mobile-map-cities-list'>
              <li className='city'>New York</li>
              <li className='city'>London</li>
              <li className='city'>Jakarta</li>
              <li className='city'>Yokohama</li>
            </ul>
          </div>

          <div className='main__f__copy'>
            <h2 className='title title--md'>Your City Not listed?</h2>
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
