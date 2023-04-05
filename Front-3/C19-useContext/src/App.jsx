import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext from './context'
import Layout from './components/Layout'

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, handleChangeTheme}}>
        <Layout>
          
        </Layout>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
