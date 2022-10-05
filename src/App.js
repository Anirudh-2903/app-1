import logo from './logo.svg';
import './App.css';
import {hello , bye } from './components/hello'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1>Hello World</h1>
      <p>Anirudh Das is learning React</p>
      <hello text="Hi everyone ,how are you ?" />
      <bye text="Goodbye,have a nice day!!" />
    </div>
  );
}

export default App;
