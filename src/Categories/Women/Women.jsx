import React, { Component } from 'react';
import '../CategorieStyling/CategoriesStyling.scss';
import { FaBeer } from 'react-icons/fa';

export class Women extends Component {

    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => {
                return(
                    <div className='productFrame' key={product.id}>
                        <div><FaBeer className='productFrame__icon' /></div>
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
                <h2 className='categoryName'>Women</h2>                  
                    <div className='productSection'>
                    {this.displayProducts()}
                    </div>
            </div>
        )
    }
}

export default Women;