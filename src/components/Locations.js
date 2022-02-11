import React from 'react'

import './Locations.css'

const Locations = () => {
  return (
    <div className='Locations'>
      <section className='banner'>
        <h2 className='title-banner'>Locations</h2>
      </section>
      <section className='main'>
        <div className='main__e'>
          <div className='map-illus'>
            <img src='' alt='' />
          </div>

          <div className='main__e__copy'>
            <h2 className='title title--md'>Your city not listed?</h2>
            <p className='text text--alt'>
              If you’d like to see Scoot in your hometown, be sure to let us know. We
              track requests and plan launches based on demand. Feel free to message us by
              clicking the link or messaging us on social.
            </p>
            <button className='btn'>Message us</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
