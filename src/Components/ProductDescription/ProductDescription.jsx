import React, { Component } from 'react';
import { withRouter } from "react-router";
// import Cart from '../Cart/Cart';


export class ProductDescription extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    
      handleClick(event) {
      event.preventDefault();
    }

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
                            (index === 0) ? <div className='productPrice' key={pricing.currency}>{pricing.currency}{pricing.amount}
                                <div onClick={ this.handleClick.bind(this) }>
                                <button onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                                ADD TO CART
                                </button>
                                </div>
                            </div>
                        : null
                        ))} 
                    </div>
                    : null
                )
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Product Description</h2>
                {this.displayProducts()}
            </div>
        )
    }
}

export default withRouter(ProductDescription);