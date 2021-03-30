import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Clock } from './Clock';
import { ClockWithHooks } from './ClockWithHooks';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link> <br></br>
      <Link to="/about">About</Link> <br></br>
      <Link to="/clock">Clock</Link><br></br>
      <Link to="/clockWithHooks">ClockWithHooks</Link>

      {/*
             A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
      */}
      <Switch>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ClockWithHooks">
          <ClockWithHooks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>This is the About Component</h2>;
}

export default App;
