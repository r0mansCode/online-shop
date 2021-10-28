import React, { Component } from 'react';
import Product from '../../Components/Product/Product';

export class Men extends Component {
    render() {
        return (
            <div>
                Men
                    <div>
                {this.props.productData.map((productData) => 
                { return <Product name={productData.name} price={productData.price} image={productData.image} />
                })}
                    </div>
            </div>
        )
    }
}

export default Men;