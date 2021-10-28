import React, { Component } from 'react';
import Product from '../../Components/Product/Product';


export class Kids extends Component {
    render() {
        return (
            <div>           
                Kids
                    <div>
                {this.props.productData.map((productData) => 
                { return <Product name={productData.name} price={productData.price} image={productData.image} />
                })}
                    </div>
            </div>
        )
    }
}


export default Kids;