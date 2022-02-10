import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='About'>
      <section className='About__banner'>
        <h2 className='title-banner'>About</h2>
      </section>
      <section className='main'>
        <div className='main__b'>
          <div className='main__b__pair'>
            <div className='pair__copy'>
              <h2 className='title title--md'>Mobility for the digital era</h2>
              <p className='text text--alt'>
                Getting around should be simple (and even fun!) for everyone. We embrace
                technology to provide low cost, smart access to scooters at your
                fingertips.
              </p>
            </div>

            <div className='pair__illus'>
              <img src='' alt='' />
            </div>
          </div>

          <div className='main__b__pair'>
            <div className='pair__illus'>
              <img src='' alt='' />
            </div>

            <div className='pair__copy'>
              <h2 className='title title--md'>Better urban living</h2>
              <p className='text text--alt'>
                We’re helping connect cities and bring people closer together. Our
                scooters are also fully-electric and we offset the minimal carbon
                footprint for each ride.
              </p>
            </div>
          </div>
        </div>

        <div className='main__c'>
          <h2 className='title title--md'>Our values</h2>

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

        <div className='main__d'>
          <h2 className='title title--md'>FAQs</h2>

          <div className='faq-group'>
            <div className='faq-group__theme'>
              <h3 className='title title--normal'>How it works</h3>
            </div>
            <div className='faq-group__questions'>
              <ul className='questions-list'>
                <li className='q-and-a'>
                  <p className='q-and-a__question'> How do I download the app?</p>
                  <p className='q-and-a__answer'>
                    To download the Scoot app, you can search “Scoot” in both the App and
                    Google Play stores. An even simpler way to do it would be to click the
                    relevant link at the bottom of this page and you’ll be re-directed to
                    the correct page.
                  </p>
                </li>
                <li className='q-and-a'>
                  <p className='q-and-a__question'> Can I find a nearby Scoots?</p>
                  <p className='q-and-a__answer'>
                    Definitely! Simply open up the app and allow us to find your location
                    while using it. We'll show you all of the closest Scoots and some
                    extra useful information.
                  </p>
                </li>
                <li className='q-and-a'>
                  <p className='q-and-a__question'> Do I need a license to ride?</p>
                  <p className='q-and-a__answer'>
                    Yup! We provide information inside the app regarding local laws and
                    the license you need to be able to ride our Scoots.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className='faq-group'>
            <div className='faq-group__theme'>
              <h3 className='title title--normal'>Safe driving</h3>
            </div>
            <div className='faq-group__questions'>
              <ul className='questions-list'>
                <li className='q-and-a'>
                  <p className='q-and-a__question'>Should I wear a helmet?</p>
                  <p className='q-and-a__answer'>
                    Yes, please do! All cities have different laws. But we strongly
                    strongly strongly recommend always wearing a helmet regardless of the
                    local laws. We like you and we want you to be as safe as possible
                    while Scooting.
                  </p>
                </li>
                <li className='q-and-a'>
                  <p className='q-and-a__question'>How about the rules & regulations?</p>
                  <p className='q-and-a__answer'>
                    Now is not the time to be a rule breaker. Be sure you're complying
                    with all local laws and regulations. Also, just be a good human being.
                    Be sure not to park your Scoot where it can block access to buildings
                    or get in people's way.
                  </p>
                </li>
                <li className='q-and-a'>
                  <p className='q-and-a__question'>What if I damage my Scoot?</p>
                  <p className='q-and-a__answer'>
                    Be sure to read our terms and conditions carefully. Not the most fun
                    job we know but we make it as clear as possible. There's an option to
                    add insurance for each trip, or you can sign up for annual insurance
                    if you're a regular Scooter.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
