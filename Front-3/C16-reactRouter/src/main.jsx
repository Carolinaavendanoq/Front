import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './components/Characters';
import Character from './components/Character';
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/characters/:name' element={<Character/>}/>
          <Route path='/episodes' element={<Episodes/>}/>
          <Route path='/locations' element={<Locations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
