import React, { Component } from 'react';

export class Men extends Component {

    displayProducts(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => {
                return(
                    <section key={product.id}>
                    <img src={product.gallery[0]} alt="productPicture" />
                    {product.name} 
                    {product.prices.map(pricing => <div key={pricing.currency}>{pricing.amount}{pricing.currency}</div>)} 
                    </section>
                );
            })
        }
    }

    render() {
        return (
            <div>
                Men
                    <div>
                    {this.displayProducts()}
                    </div>
            </div>
        )
    }
}

export default Men;