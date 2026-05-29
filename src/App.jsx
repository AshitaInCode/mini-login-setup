import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div>
      <h1>
        {isLoggedIn ?"Welcome Ashita": "Please Login"}
      </h1>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  )
}

export default App
