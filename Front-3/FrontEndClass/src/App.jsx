import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HelloName from './components/HelloName'
import OnlyHi from './components/OnlyHi'
import Counter from './components/Counter'
import Switcher from './components/Switcher'
import Event from './components/Event'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <HelloName >
          <OnlyHi name = 'Juan'></OnlyHi>
          <OnlyHi name = 'Caro'></OnlyHi>
          <OnlyHi name = 'Cami'></OnlyHi>
      </HelloName>
      <hr />
      <h2>Clase 7</h2>
      <Counter />
      <Switcher />
      <hr />
      <h2>Clase 8</h2>
      <Event />
      <Event number="2"/>
      <Event number="3"/>
      <Form />
    </div>
  )
}

export default App
