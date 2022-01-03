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
      currency: {value: 'USD', label: <BiDollar/>, rate: 1},
      galery: [0],
      selected: null
    }
    this.handleGalery = this.handleGalery.bind(this);
    this.handleGalery0 = this.handleGalery0.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleGalery (pic) {
    this.setState({ galery: pic});
  }

  handleGalery0 (id) {
    this.setState({ galery: 0, selected: id });
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
    console.log(this.state)
    console.log(this.props)
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
                handleClick={this.handleClick}
                handleGalery0={this.handleGalery0}/>
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
                            galery={this.state.galery}
                            handleClick={this.handleClick}
                            handleGalery={this.handleGalery}
                            productId={this.state.selected} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);


