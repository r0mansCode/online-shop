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

  displayProducts(){
    var data = this.props.data;
    if(data.loading){
        return(<div>Loading products...</div>)
    } else {
        return data.category.products.map(product => {
            return(
                <div key={product.id}>
                    <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                    <section className='productName'>
                    {product.name} 
                    </section>
                    {product.prices.map((pricing, index) => (
                        (index === 0) ? <div className='productPrice' key={pricing.currency}>{pricing.currency}{pricing.amount}</div> : null
                    ))} 
                </div>
            );
        })
    }
}

  render() {
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
      <Route exact path="/Cart">
        <Cart />
      </Route>
      <Route exact path="/:id">
        <ProductDescription data={this.props.data} />
      </Route>
      </Switch>
    </div>
    </Router>
  )}
  
}

export default graphql(getProductsQuery)(App);
