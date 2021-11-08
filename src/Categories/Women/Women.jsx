import React, { Component } from 'react';

export class Women extends Component {

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
                
                    {product.prices.map((pricing, index) => (
                        (index === 0) ? <div>{pricing.currency}{pricing.amount}</div> : null
                    ))} 
                    </section>
                );
            })
        }
    }

    render() {
        return (
            <div>
                Women
                    <div>
                    {this.displayProducts()}
                    </div>
            </div>
        )
    }
}

export default Women;