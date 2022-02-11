import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Careers from './components/Careers'
import Locations from './components/Locations'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='careers' element={<Careers />} />
          <Route path='locations' element={<Locations />} />
          <Route path='/' element={<Navigate to='home' />} />

          <Route
            path='*'
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
