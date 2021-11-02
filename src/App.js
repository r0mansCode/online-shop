import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import './App.scss';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import { Kids } from './Categories/Kids/Kids';
import { Men } from './Categories/Men/Men';
import { Women } from './Categories/Women/Women';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetProducts from './Components/GetProducts/GetProducts';

const shoeLink = "https://rukminim1.flixcart.com/image/714/857/k3xcdjk0pkrrdj/shoe/m/u/j/10-ds-1603-d-sneakerz-dss-16603-white-10-original-imaf8uh4a7fecktf.jpeg?q=50"
const shoe = <img src={shoeLink} className="shoesLogo" alt="Shoes" />

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});



class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      balance: 10000,
         productData: [
            {
            id: 1,
            image: shoe,
            name: "Apollo Running Short",
            price: 50.00
            },
            {
              id: 2,
            image: shoe,
            name: "Other Running Short",
            price: 500.00
            },
            {
              id: 3,
            image: shoe,
            name: "Other Running Short",
            price: 5000.00
            }
        ]
    }
  }
  
  render() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
      <Navbar />
      < GetProducts/>
      <Switch>
      <Route exact path="/">
        <Women productData={this.state.productData} />
      </Route>
      <Route exact path="/Men">
        <Men productData={this.state.productData} />
      </Route>
      <Route exact path="/Kids">
        <Kids productData={this.state.productData} />
      </Route>
      </Switch>
    </div>
    </Router>
    </ApolloProvider>
  )}
  
}

export default App;
