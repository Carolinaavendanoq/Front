import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-2);
  };
  return (
    <div className="App">
      <Navbar/>
      <button onClick={handleClick}>Volver 2 páginas atrás</button>
      <Outlet/>
    </div>
  )
}

export default App
