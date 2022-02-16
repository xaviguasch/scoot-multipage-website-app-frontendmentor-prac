import React from 'react'

import './Careers.css'

// Imported icons and patterns
import { ReactComponent as LeftDownwardArrow } from '../assets/patterns/left-downward-arrow.svg'

// Imported images
import joinUsImg from '../assets/images/join-us.jpg'
import ourTechImg from '../assets/images/our-tech.jpg'
import ourIntegrityImg from '../assets/images/our-integrity.jpg'
import ourCommunityImg from '../assets/images/our-community.jpg'

const Careers = () => {
  return (
    <div className='Careers'>
      <section className='banner banner--careers'>
        <h2 className='title'>Careers</h2>
      </section>

      <section className='main'>
        <div className='main__b main-b--careers'>
          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Care to join our mission?</h2>
              <p className='text text--alt'>
                We’re always looking for ambitious individuals to help us on our journey.
                If you’re passionate about our mission to provide clean, accessible
                transport to improve urban living we want to hear from you!
              </p>
              <a className='btn' href='#'>
                Say Hello
              </a>
            </div>

            <div className='pair__illus'>
              <LeftDownwardArrow className='pattern pattern__six' />
              <img src={joinUsImg} alt='work meeting' />
            </div>
          </div>
        </div>

        <div className='main__c'>
          <h2 className='title title--md'>Why join us?</h2>

          <ul className='card-list'>
            <li>
              <div className='card'>
                <div className='card__img-container'>
                  <img src={ourTechImg} alt='hand typing on phone' />
                  <div className='card__num-wrapper'>
                    <div className='card__number'>01</div>
                  </div>
                </div>

                <div className='card__copy-container'>
                  <h3 className='title title--normal'>Our tech</h3>
                  <p className='text text--alt'>
                    We’re using cutting edge technology to drive accessible urban
                    transportation forward. Our fully electric scooters are a joy to ride!
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className='card'>
                <div className='card__img-container'>
                  <img src={ourIntegrityImg} alt='man on a vespa' />
                  <div className='card__num-wrapper'>
                    <div className='card__number'>02</div>
                  </div>
                </div>

                <div className='card__copy-container'>
                  <h3 className='title title--normal'>Our integrity</h3>
                  <p className='text text--alt'>
                    We are fully committed to deliver a great yet safe, sustainable
                    micro-mobility experience in every city we serve.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className='card'>
                <div className='card__img-container'>
                  <img src={ourCommunityImg} alt='people walking' />
                  <div className='card__num-wrapper'>
                    <div className='card__number'>03</div>
                  </div>
                </div>

                <div className='card__copy-container'>
                  <h3 className='title title--normal'>Our community</h3>
                  <p className='text text--alt'>
                    We support every community we serve. All workers are paid a living
                    wage based on their location and are Scoot employees.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className='main__e'>
          <ul className='jobs-list'>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>General Manager</p>
                <p className='job-location'> Jakarta, Indonesia</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>UI/UX Designer</p>
                <p className='job-location'>Yokohama, Japan</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>Blog Content Copywriter</p>
                <p className='job-location'>New York, United States</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>Graphic Designer</p>
                <p className='job-location'>New York, United States</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>Fleet Supervisor</p>
                <p className='job-location'>Jakarta, Indonesia</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-position'>UX Analyst</p>
                <p className='job-location'>London, United Kingdom</p>
              </div>
              <a className='btn' href='#'>
                Apply
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Careers
