import { useState } from 'react';

import Hello from 'Components/Hello/Hello';
import Dummy1 from 'Pages/Dummy1/Dummy1';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [buttonText, setButtonText] = useState();
  const [buttonText, setButtonText] = useState(
    'Click Here to update the state'
  );

  // The click event handler to call the state update method
  const handleClick = () => {
    setButtonText('This is a new buttonText value here. State updated !');
  };

  return (
    <div className="App">
      <Hello></Hello>
      <header className="App-header">
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
          <Dummy1></Dummy1>
        </a>
        <button onClick={() => handleClick()}>{buttonText}</button>
      </header>
    </div>
  );
}

export default App;
