import React, { Component } from 'react';
import { withRouter } from "react-router";


export class ProductDescription extends Component {

    displayProducts(){
        function converter(input) {
            return (input).replace(/<[^>]+>/g, '');
        }
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => (
                (product.id === this.props.match.params.id) ?
                    <div key={product.id}>
                        <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                        <section className='productName'>
                        {product.name} 
                        <div>{converter(product.description)}</div>
                        </section>
                        {product.prices.map((pricing, index) => (
                            (index === 0) ? <div className='productPrice' key={pricing.currency}>{pricing.currency}{pricing.amount}</div> : null
                        ))} 
                    </div>
                    : null
                )
            )
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Product Description</h2>
                {this.displayProducts()}
            </div>
        )
    }
}

export default withRouter(ProductDescription);