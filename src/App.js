import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from './Components/Queries/Queries';
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import  Kids  from './Categories/Kids/Kids';
import Men from './Categories/Men/Men';
import Women from './Categories/Women/Women';
import Cart from './Components/Cart/Cart';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productCart: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (item){
      this.setState({index: this.state.productCart.push(item)})
  }

  render() {
  return (
    <Router >
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Women data={this.props.data} productCart={this.state.productCart} handleClick={this.handleClick} />
      </Route>
      <Route exact path="/Men">
        <Men data={this.props.data} productCart={this.state.productCart} handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Kids">
        <Kids data={this.props.data} productCart={this.state.productCart} handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Cart">
        <Cart data={this.props.data} productCart={this.state.productCart} handleClick={this.handleClick} />
      </Route>
      <Route exact path="/:id">
        <ProductDescription data={this.props.data} productCart={this.state.productCart} handleClick={this.handleClick} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);
