import React, { Component } from 'react';
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import { Kids } from './Categories/Kids/Kids';
import { Men } from './Categories/Men/Men';
import { Women } from './Categories/Women/Women';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Women />
      </Route>
      <Route exact path="/Men">
        <Men />
      </Route>
      <Route exact path="/Kids">
        <Kids />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
}

export default App;
