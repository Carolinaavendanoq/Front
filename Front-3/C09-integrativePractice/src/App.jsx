import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Student's average by course</h1>
      <Form/>
      <Table></Table>
    </div>
  )
}

export default App
