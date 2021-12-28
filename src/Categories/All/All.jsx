import React, { Component } from 'react';
import '../CategorieStyling/CategoriesStyling.scss';
import '../../Components/Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { withRouter } from 'react-router-dom';

function deleteFirst (urL) {return urL.substring(1)};

export class All extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    
      handleClick(event) {
      event.preventDefault();
    }

    displayCategory() {
        
        var urL = this.props.location.pathname;
        var deleteFirst = urL.substring(1);
        var uP = deleteFirst.charAt(0).toUpperCase() + deleteFirst.slice(1);
        if(this.props.location.pathname === "/"){
            return (<div>All</div>)
        } else {
            return <div>{uP}</div>
        }
    }

    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product =>(
                (product.category === deleteFirst(this.props.location.pathname)) || (this.props.location.pathname === "/") ?
                    <Link className='productFrame' key={product.id} to={product.id}>
                    <div>
                        {(product.inStock === true) ?
                        <div onClick={ this.handleClick.bind(this) }>
                            <HiOutlineShoppingCart className='productFrame__icon' 
                                onClick={() =>product.prices.map((pricing, index) =>( (index === 0) ? this.props.handleClick(product.id, pricing.amount) : null))} />
                        </div> : null}
                        {(product.inStock === true) ?
                        <img className='productImage' src={product.gallery[0]} alt="productPicture" /> :
                        <div><img className='productImage__outOfStock' src={product.gallery[0]} alt="productPicture" />
                        <div className='productImage__text'>OUT OF STOCK</div></div>}
                        <section className='productName'>
                            {product.name} {product.brand}
                        </section>
                        <div>
                        {product.prices.map((pricing, index) => (
                            (pricing.currency === this.props.currency.value) ? <div className='productPrice' key={pricing.currency}>{this.props.currency.label}{pricing.amount}
                            
                            </div> : null
                        ))} 
                        </div>
                        
                    </div>
                    </Link>
                        : null
                )
            )
        }
    }

    render() {
       
        return (
            <div className='categoryPage'>
                <h2 className='categoryName'>
                    {this.displayCategory()}
                    </h2>                  
                    <div className='productSection'>
                    {this.displayProducts()}
                    </div>
            </div>
        )
    }
}

export default withRouter(All);