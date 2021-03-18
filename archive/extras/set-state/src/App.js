import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { buttonText: 'Click me, please' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { buttonText: 'Thanks, been clicked!' };
    });
  }

  render() {
    const { buttonText } = this.state;
    return (
      <div className="App">
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
          </a>
          <button onClick={this.handleClick}>{buttonText}</button>
        </header>
      </div>
    );
  }
}
