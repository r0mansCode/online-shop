import React, { Component } from 'react';
import '../CategorieStyling/CategoriesStyling.scss';
import { HiOutlineShoppingCart } from 'react-icons/hi';


export class Kids extends Component {

    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => {
                return(
                    <div className='productFrame' key={product.id}>
                        <div><HiOutlineShoppingCart className='productFrame__icon' /></div>
                        <img className='productImage' src={product.gallery[0]} alt="productPicture" />
                        <section className='productName'>
                        {product.name} 
                        </section>
                        {product.prices.map((pricing, index) => (
                            (index === 0) ? <div className='productPrice'>{pricing.currency}{pricing.amount}</div> : null
                        ))} 
                    </div>
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