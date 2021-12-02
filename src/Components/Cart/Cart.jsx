import React, { Component } from 'react';
import './Cart.scss';

function a (leng) {return leng.length};
function round(pricE) {return pricE.toFixed(2)};

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
            return filteredCart.map((cartItem, ind) => { 
                return (
                    data.category.products.map((product, index) => (
                        (product.id === cartItem) ?
                                <div className='cart' key={index}> 

                                    <div className='cart__firstSection'>
                                        <div className='cart__firstSection__productName'>
                                            {product.name}
                                        </div>
                                        {product.prices.map((pricing, indexx) => (
                                            (indexx === 0) ? 
                                                <div className='cart__firstSection__productPrice' key={indexx}>
                                                    <div>
                                                        {pricing.currency} {round((a(cartArray.filter(item => item.id === product.id)))*(pricing.amount))}
                                                    </div>
                                                </div>
                                            : null
                                        ))}
                                    </div>

                                {product.prices.map((pricing, indexx) => (indexx === 0) ? 
                                        <div className='cart__secondSection'>
                                            <div className='cart__secondSection__buttons'>
                                                <div onClick={ this.handleClick.bind(this) }>
                                                    <button className='cart__secondSection__buttons__button' onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                                                    +
                                                    </button>
                                                </div>
                                                <div>
                                                    {a(cartArray.filter(item => item.id === product.id))}
                                                </div>
                                                <div onClick={ this.handleClickRemove.bind(this) }>
                                                    <button className='cart__secondSection__buttons__button' onClick={() => this.props.handleClickRemove(ind)}>
                                                    -
                                                    </button>
                                                </div>
                                            </div>
                                                <div className='cart__secondSection__container' >
                                                    <img className='cart__secondSection__image' src={product.gallery[0]} alt="productPicture" />
                                                </div>
                                        </div> 
                                    : null )}

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
            <div className='title'>Cart</div>
            <div className='cartPage'>{this.displayProducts()}</div>
        </div>
        )
    }
}



export default Cart;


