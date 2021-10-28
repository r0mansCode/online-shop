import React, { Component } from 'react';

export class Product extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.image}</h1>
              <h1>{this.props.name}</h1>
              <h1>{this.props.price}</h1>
            </div>
        )
    }
}



export default Product;
