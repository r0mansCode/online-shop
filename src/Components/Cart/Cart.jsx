import React, { Component } from 'react';

function a (leng) {return leng.length};

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  };  

//  function filteredId (array, id){
//      return array.filter(id);
//  }

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        };
    
      handleClick(event) {
      event.preventDefault();
    };

    displayAmmount(){
        var array1 = this.props.totalAmount;      
        var reducedArray = array1.reduce((a, {id, amount}) => (a[id] = (a[id] || 0) + amount, a), {});
        return Object.values(reducedArray)
    }

    displayProducts(){
        var data = this.props.data;
        var cart = this.props.productCart;
        var filteredCart = cart.filter(onlyUnique);
        var array1 = this.props.totalAmount;
        // var reducedArray = array1.reduce((a, {id, amount}) => (a[id] = (a[id] || 0) + amount, a), {});
            return filteredCart.map(cartItem => { 
                return (
                    data.category.products.map((product, index) => (
                        (product.id === cartItem) ?
                                <div key={index}>
                                        <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                                        <div className='productName'>
                                        {product.name}
                                        </div>
                                        {product.prices.map((pricing, index) => (
                                            (index === 0) ? 
                                                <div className='productPrice' key={pricing.currency}>
                                                    {pricing.currency} {pricing.amount}
                                                    <div>{(a(array1.filter(item => item.id === product.id)))*(pricing.amount)}</div>
                                                    {/* {Object.values(reducedArray)} */}
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
            {/* {this.displayAmmount()} */}
        </div>
        )
    }
}



export default Cart;
