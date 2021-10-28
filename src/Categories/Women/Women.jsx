import React, { Component } from 'react';
import Product from '../../Components/Product/Product';

export class Women extends Component {
    render() {
        return (
            <div>
                Women
                    <div>
                {this.props.productData.map((productData) => 
                { return <Product name={productData.name} price={productData.price} image={productData.image} />
                })}
                    </div>
            </div>
        )
    }
}

export default Women;