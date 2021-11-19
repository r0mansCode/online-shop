import React, { Component } from 'react';

function a (leng) {return leng.length};


export class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        };
    
      handleClick(event) {
        event.preventDefault();
    };

      handleClickRemove(event) {
        event.preventDefault();
    };


    displayProducts(){
        var data = this.props.data;
        var cartArray = this.props.productCart;
        var filteredCart = [...new Set(cartArray.map(datA => datA.id))];
            return filteredCart.map(cartItem => { 
                return (
                    data.category.products.map((product, index) => (
                        (product.id === cartItem) ?
                                <div key={index}>
                                        <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                                        <div className='productName'>
                                        {product.name}
                                        </div>
                                        {product.prices.map((pricing, indexx) => (
                                            (indexx === 0) ? 
                                                <div className='productPrice' key={indexx}>
                                                    {pricing.currency} {pricing.amount}
                                                    <div>{(a(cartArray.filter(item => item.id === product.id)))*(pricing.amount)}</div>

                                                    <div onClick={ this.handleClick.bind(this) }>
                                                        <button onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                                                        +
                                                        </button>
                                                    </div>

                                                        <div>{a(cartArray.filter(item => item.id === product.id))}</div>

                                                        <div>
                                                            <div key={product.id} onClick={ this.handleClickRemove.bind(this) }>
                                                                <button onClick={() => this.props.handleClickRemove(product.id)}>
                                                                -
                                                                </button>
                                                                {/* this.props.cartArray.map(it1 => { return ( )}) */}
                                                            </div>
                                                        </div>
                                                </div>
                                            : null
                                        ))}
                                 
                                </div>
                            : null
                    ))
                )}
            )
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


