import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CategorieStyling/CategoriesStyling.scss';
import { HiOutlineShoppingCart } from 'react-icons/hi';


export class Kids extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    
      handleClick(event) {
      event.preventDefault();
    }

    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => {
                return(
                    <Link className='productFrame' key={product.id} to={product.id}>
                    <div>
                        <div><HiOutlineShoppingCart className='productFrame__icon' /></div>
                        <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                        <section className='productName'>
                        {product.name} 
                        </section>
                        {product.prices.map((pricing, index) => (
                            (index === 0) ? <div className='productPrice' key={pricing.currency}>{pricing.currency}{pricing.amount}</div> : null
                        ))} 
                        <div onClick={ this.handleClick.bind(this) }>
                            <button onClick={() =>this.props.handleClick(product.id)}>
                            ADD TO CART
                            </button>
                            </div>
                    </div>
                    </Link>
                );
            })
        }
    }

    render() {
        return (
            <div className='categoryPage'>
            <h2 className='categoryName'>Kids</h2>                  
                <div className='productSection'>
                {this.displayProducts()}
                </div>
        </div>
        )
    }
}


export default Kids;