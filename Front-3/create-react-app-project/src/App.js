import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import HelloWorld from './components/HelloWorld';

// Arrow function
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
      </header>
    </div>
  );
}

// Para que la reconozcan desde archivos externos y la importen
export default App;
