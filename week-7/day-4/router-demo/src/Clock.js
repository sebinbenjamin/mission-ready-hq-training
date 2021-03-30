import React, { Component } from 'react';

// Clock here is a class component and has a state which is updated by this SPECIAL method called
// this.setState
export class Clock extends Component {
  constructor(props) {
    super(props);
    // The SPECIAL initial state of the component
    this.state = { date: new Date() };

    //  Call a method every x milli seconds, Here x = 1000, so ie every second
    setInterval(() => {
      this.setState({ date: new Date() }); // method to update the state
    }, 1000);
  }

  // This method is what prints stuff.
  render() {
    const timeResult = this.state.date.toLocaleTimeString();
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {timeResult}.</h2>
      </div>
    );
  }
}
