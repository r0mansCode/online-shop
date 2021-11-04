import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
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
  
  displayProducts(){
    var data = this.props.data;
    if(data.loading){
        return(<div>Loading products...</div>)
    } else {
        return data.category.products.map(product => {
            return(
                <section key={product.id}>
                <img src={product.gallery[0]} />
                {product.name} 
                {product.prices.map(pricing => <div>{pricing.amount}{pricing.currency}</div>)} 
                </section>
            );
        })
    }
}

constructor (props) {
  super(props);
  this.state = {
  }
}


  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <section id="product-list">
          {this.displayProducts()}
      </section>
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

export default graphql(getProductsQuery)(App);
