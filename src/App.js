import React, { Component } from 'react';
import './App.scss';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from './Components/Queries/Queries';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import All from './Categories/All/All';
import Cart from './Components/Cart/Cart';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productCart: [],
      currency: {value: 'USD', label: <BiDollar/>, rate: 1}
    }
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleCurrency (value) {
    this.setState({ currency: value});
  }

  handleClick (id, amount){
      this.setState({index: this.state.productCart.push({id, amount})})
  }

  //handleClickRemove not working correct, will fix it in the future
   handleClickRemove (index){
    const newTotalAmount = this.state.productCart.filter((_, i) =>  i !== index);
    this.setState({ productCart: newTotalAmount});
   }

  render() {
  return (
    <Router >
    <div className='App'>
      <Navbar data={this.props.data} 
              productCart={this.state.productCart}
              currency={this.state.currency} 
              handleClick={this.handleClick}
              handleClickRemove={this.handleClickRemove}
              handleCurrency={this.handleCurrency} />
      <Switch>
      <Route exact path={["/", "/tech", "/clothes"]}>
        <All  data={this.props.data} 
                productCart={this.state.productCart} 
                currency={this.state.currency} 
                handleClick={this.handleClick}/>
      </Route>
      <Route exact path="/Cart">
        <Cart   data={this.props.data} 
                productCart={this.state.productCart}
                currency={this.state.currency} 
                handleClick={this.handleClick}
                handleClickRemove={this.handleClickRemove}/>
      </Route>
      <Route exact path="/:id">
        <ProductDescription data={this.props.data} 
                            productCart={this.state.productCart} 
                            currency={this.state.currency}
                            handleClick={this.handleClick} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);


