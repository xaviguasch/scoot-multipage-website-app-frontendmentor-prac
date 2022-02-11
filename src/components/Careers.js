import React from 'react'

const Careers = () => {
  return (
    <div className='Careers'>
      <section className='banner'>
        <h2 className='title-banner'>Careers</h2>
      </section>

      <section className='main'>
        <div className='main__b'>
          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Care to join our mission?</h2>
              <p className='text text--alt'>
                We’re always looking for ambitious individuals to help us on our journey.
                If you’re passionate about our mission to provide clean, accessible
                transport to improve urban living we want to hear from you!
              </p>
              <button className='btn'>Say Hello</button>
            </div>

            <div className='pair__illus'>
              <img src='' alt='' />
            </div>
          </div>
        </div>

        <div className='main__c'>
          <h2 className='title title--md'>Why join us?</h2>

          <ul>
            <li>
              <div className='card'>
                <img src='' alt='' />
                <div className='card__number'>1</div>
                <h3 className='title title--sm'>Our tech</h3>
                <p className='text text--alt'>
                  We’re using cutting edge technology to drive accessible urban
                  transportation forward. Our fully electric scooters are a joy to ride!
                </p>
              </div>
            </li>

            <li>
              <div className='card'>
                <img src='' alt='' />
                <div className='card__number'>2</div>
                <h3 className='title title--sm'>Our integrity</h3>
                <p className='text text--alt'>
                  We are fully committed to deliver a great yet safe, sustainable
                  micro-mobility experience in every city we serve.
                </p>
              </div>
            </li>

            <li>
              <div className='card'>
                <img src='' alt='' />
                <div className='card__number'>3</div>
                <h3 className='title title--sm'>Our community</h3>
                <p className='text text--alt'>
                  We support every community we serve. All workers are paid a living wage
                  based on their location and are Scoot employees.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className='main__e'>
          <ul className='jobs-list'>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>General Manager</p>
                <p className='job-location'> Jakarta, Indonesia</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>UI/UX Designer</p>
                <p className='job-location'>Yokohama, Japan</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>Blog Content Copywriter</p>
                <p className='job-location'>New York, United States</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>Graphic Designer</p>
                <p className='job-location'>New York, United States</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>Fleet Supervisor</p>
                <p className='job-location'>Jakarta, Indonesia</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
            <li className='job-listing'>
              <div className='job-details'>
                <p className='job-positon'>UX Analyst</p>
                <p className='job-location'>London, United Kingdom</p>
              </div>
              <button className='btn'>Apply</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Careers
