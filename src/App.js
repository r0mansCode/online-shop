import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from './Components/Queries/Queries';
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import { Kids } from './Categories/Kids/Kids';
import { Men } from './Categories/Men/Men';
import { Women } from './Categories/Women/Women';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

constructor (props) {
  super(props);
  this.state = {
  }
}


  render() {
    console.log(this.props);
  return (
    <Router >
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Women data={this.props.data} />
      </Route>
      <Route exact path="/Men">
        <Men data={this.props.data} />
      </Route>
      <Route exact path="/Kids">
        <Kids data={this.props.data} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);
