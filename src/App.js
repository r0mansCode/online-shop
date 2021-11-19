import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from './Components/Queries/Queries';
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import Tech from './Categories/Tech/Tech';
import Clothes from './Categories/Clothes/Clothes';
import All from './Categories/All/All';
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
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleClick (id, amount){
      this.setState({index: this.state.productCart.push({id, amount})})
  }

   handleClickRemove (_,index){
    const newTotalAmount = this.state.productCart.filter(i =>  i !==index);
    this.setState({ productCart: newTotalAmount});
   }

  render() {
  return (
    <Router >
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <All  data={this.props.data} 
                productCart={this.state.productCart} 
                handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Clothes">
        <Clothes    data={this.props.data} 
                productCart={this.state.productCart} 
                handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Tech">
        <Tech   data={this.props.data} 
                productCart={this.state.productCart} 
                handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Cart">
        <Cart   data={this.props.data} 
                productCart={this.state.productCart} 
                handleClick={this.handleClick}
                handleClickRemove={this.handleClickRemove}/>
      </Route>
      <Route exact path="/:id">
        <ProductDescription data={this.props.data} 
                            productCart={this.state.productCart} 
                            handleClick={this.handleClick} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);
