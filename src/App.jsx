import { Outlet } from 'react-router-dom'

// components
import NavBar from './pages/components/NavBar'

import './App.css'

function App() {
  
  return (
    <div>
      <NavBar/>
      <h2>Movies lib</h2>
      <Outlet/>
    </div>
  )
}

export default App
