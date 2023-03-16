import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[renderCount, setRenderCount] = useState(0);
  const[pedidos, setPedidos] = useState([]);

  useEffect(()=> {
    console.log('renderizado');
    setRenderCount(renderCount + 1);
  }, [count])

  useEffect(() => {
    setTimeout(()=>{
      setPedidos([...pedidos, '1 Pizza Fugazzeta']);
      setCount(count + 1);
    }, 2000);
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ciclo de vida</h1>
      <h2>Presionaste el botón {count} veces</h2>
      <h2>El componente se renderizó: {renderCount} veces</h2>
      {pedidos.map((pedido) => (
        <li key={count}>{pedido}</li>
      ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click aquí
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
