import React, { Component } from 'react'
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import Contents from './Components/Contents/Contents';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <Contents />
    </div>
  )}
}

export default App;
