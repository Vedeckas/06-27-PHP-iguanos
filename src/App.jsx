import logo from './logo.svg';
import './App.css';
import Racoon from './Components/003/Racoon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <Racoon />
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
      </header>
    </div>
  );
}

export default App;