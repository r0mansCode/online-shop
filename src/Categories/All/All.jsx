import React, { Component } from 'react';
import '../CategorieStyling/CategoriesStyling.scss';
import '../../Components/Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export class All extends Component {
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
                        <div>
                        {product.prices.map((pricing, index) => (
                            (index === 0) ? <div className='productPrice' key={pricing.currency}>{pricing.currency}{pricing.amount}
                            <div onClick={ this.handleClick.bind(this) }>
                            <button className='productFrame__button' onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                            ADD TO CART
                            </button>
                            </div>
                            </div> : null
                        ))} 
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
                <h2 className='categoryName'>All</h2>                  
                    <div className='productSection'>
                    {this.displayProducts()}
                    </div>
            </div>
        )
    }
}

export default All;