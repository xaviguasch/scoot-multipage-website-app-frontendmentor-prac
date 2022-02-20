import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import './App.css'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleNavOpen = () => {
    setMobileNavOpen((prev) => !prev)
  }

  // Deactivates the scrolling when the modal nav is open
  if (mobileNavOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }

  return (
    <div className='App'>
      <Header onHandleNavOpen={handleNavOpen} mobileNavOpen={mobileNavOpen} />

      {mobileNavOpen && (
        <Navigation
          placement='modal'
          onHandleNavOpen={handleNavOpen}
          mobileNavOpen={mobileNavOpen}
        />
      )}

      <div className='App__content'>
        <div className={`App__content__overlay ${mobileNavOpen ? 'overlay-active' : ''}`}>
          <Outlet />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
