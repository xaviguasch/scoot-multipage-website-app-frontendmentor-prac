import './App.css'

import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h1>Scoot</h1>

      <Outlet />
    </div>
  )
}

export default App
