import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './components/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
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
