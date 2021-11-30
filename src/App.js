import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from './Components/Queries/Queries';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import All from './Categories/All/All';
import Cart from './Components/Cart/Cart';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


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

  //handleClickRemove not working correct, will fix it in the future
   handleClickRemove (index){
    const newTotalAmount = this.state.productCart.filter((_, i) =>  i !== index);
    this.setState({ productCart: newTotalAmount});
   }

  render() {
  return (
    <Router >
    <div>
      <Navbar data={this.props.data} 
              productCart={this.state.productCart} 
              handleClick={this.handleClick}
              handleClickRemove={this.handleClickRemove} />
      <Switch>
      <Route exact path={["/", "/tech", "/clothes"]}>
        <All  data={this.props.data} 
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


