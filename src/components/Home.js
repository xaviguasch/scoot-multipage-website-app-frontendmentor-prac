import React from 'react'

import './Home.css'

// Imported icons and patterns
import { ReactComponent as LocateIcon } from '../assets/icons/locate.svg'
import { ReactComponent as ScooterIcon } from '../assets/icons/scooter.svg'
import { ReactComponent as RideIcon } from '../assets/icons/ride.svg'
import { ReactComponent as LeftArrowDownPattern } from '../assets/patterns/left-downward-arrow.svg'
import { ReactComponent as RightArrowPattern } from '../assets/patterns/right-arrow.svg'

// Imported images
import telemetryImg from '../assets/images/telemetry.jpg'
import nearYouImg from '../assets/images/near-you.jpg'
import paymentsImg from '../assets/images/payments.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <section className='hero'>
        <div className='hero__copy'>
          <h1 className='title'> Scooter sharing made simple</h1>
          <p className='text'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed in
            convenient locations in each of our cities. Use our app to locate the nearest
            bike, unlock it with a tap, and you’re away!
          </p>

          <a className='btn' href='#footer__get-scootin'>
            Get Scootin
          </a>
        </div>
      </section>
      <section className='main'>
        <div className='main__a'>
          <ul>
            <li className='main__a__el'>
              <LocateIcon className='Home__icon' />
              <h3 className='title title--sm'>Locate with app</h3>
              <p className='text text--alt '>
                Use the app to find the nearest scooter to you. We are continuously
                placing scooters in the areas with most demand, so one should never be too
                far away.
              </p>
            </li>
            <li className='main__a__el'>
              <ScooterIcon className='Home__icon' />
              <h3 className='title title--sm'>Pick your scooter</h3>
              <p className='text text--alt '>
                We show the most important info for the scooters closest to you. So you
                know how much charge they have left and can see roughly how much it will
                cost.
              </p>
            </li>
            <li className='main__a__el'>
              <RideIcon className='Home__icon' />
              <h3 className='title title--sm'>Enjoy the ride</h3>
              <p className='text text--alt '>
                Scan the QR code and the bike will unlock. Retract the cable lock, put on
                a helmet, and you’re off! Always lock bikes away from walkways and
                accessibility ramps.
              </p>
            </li>
          </ul>
        </div>

        <div className='main__b'>
          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Easy to use riding telemetry</h2>
              <p className='text text--alt'>
                The Scoot app is available with riding telemetry. This means it can show
                you your average speed, how long you've been using the scooter, your
                traveling distance, and many more things all in an easy to use app.
              </p>
              <a className='btn' href='#'>
                Learn More
              </a>
            </div>

            <div className='pair__illus'>
              <LeftArrowDownPattern className='pattern pattern__one' />
              <img src={telemetryImg} alt='Woman looking at phone' />
            </div>
          </div>

          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Coming to a city near you</h2>
              <p className='text text--alt'>
                Scoot is available in 4 major cities so far. We’re expanding rapidly, so
                be sure to let us know if you want to see us in your hometown. We’re
                aiming to let our scooters loose on 23 cities over the coming year.
              </p>
              <a className='btn' href='#'>
                Learn More
              </a>
            </div>

            <div className='pair__illus'>
              <RightArrowPattern className='pattern pattern__two' />
              <img src={nearYouImg} alt='city street' />
            </div>
          </div>

          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Zero hassle payments</h2>
              <p className='text text--alt'>
                Our payment is as easy as one two three. We accept most credit cards and
                debit cards. You can also link your PayPal account inside the app. Need to
                pay later? No worries! You can defer payment for up to a month.
              </p>
              <a className='btn' href='#'>
                Learn More
              </a>
            </div>

            <div className='pair__illus'>
              <LeftArrowDownPattern className='pattern pattern__three' />
              <img src={paymentsImg} alt='hand in wallet' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
