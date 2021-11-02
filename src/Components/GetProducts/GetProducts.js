import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProductsQuery } from '../Queries/Queries';

export class GetProducts extends Component {
    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading books...</div>)
        } else {
            return data.category.products.map(product => {
                return(
                    <li key={product.id}>{product.name} {product.category}</li>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="product-list">
                    {this.displayProducts()}
                </ul>
            </div>

        );
    }
}

export default graphql(getProductsQuery)(GetProducts);