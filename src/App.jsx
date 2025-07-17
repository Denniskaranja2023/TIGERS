import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 

<Navbar/>
    
        <h1>Tigers Project</h1>
 
      </div>
     
    </>
  )
}

export default App
