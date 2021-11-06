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
  
  displayProducts(){
    var data = this.props.data;
    if(data.loading){
        return(<div>Loading products...</div>)
    } else {
        return data.category.products.map(product => {
            return(
                <section key={product.id}>
                <img src={product.gallery[0]} alt="productPicture" />
                {product.name} 
                {product.prices.map(pricing => <div key={pricing.currency}>{pricing.amount}{pricing.currency}</div>)} 
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
    // console.log(this.props);
  return (
    <Router>
    <div className="App">
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
