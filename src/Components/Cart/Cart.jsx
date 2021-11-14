import React, { Component } from 'react';

function a (leng) {return leng.length};

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    
      handleClick(event) {
      event.preventDefault();
    }

    displayProducts(){
        var data = this.props.data;
        var cart = this.props.productCart;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return cart.map(cartItem =>  {
                return (
                    data.category.products.map((product, index) => (
                        (product.id === cartItem) ?
                        <div key={index}>
                            <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                            <div className='productName'>
                            {product.name}
                            </div>
                            <div className='productCategory'>
                            {product.category}
                            </div>
                            {product.prices.map((pricing, index) => (
                            (index === 0) ? 
                                <div className='productPrice' key={pricing.currency}>
                                {pricing.currency}{pricing.amount}
                                </div> 
                            : null
                        ))} 
                        </div>
                        : null
                    ))
                )}
            )
        }
    }

    

    render() {
        console.log(this.props)
        return (
        <div>
            <div>Cart</div>
            {a(this.props.productCart)}
            {this.displayProducts()}
        </div>
        )
    }
}



export default Cart;
