import React, { Component } from 'react';
import { withRouter } from "react-router";
import './ProductDescription.scss';

export class ProductDescription extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleGalery = this.handleGalery.bind(this);
        }


      handleGalery(event) {
      event.preventDefault();
    }

      handleClick(event) {
      event.preventDefault();
    }


      displayProducts(){
        function converter(input) {
            return (input).replace(/<[^>]+>/g, '');
        }
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading products...</div>)
        } else {
            return data.category.products.map((product, index) => (
                (product.id === this.props.match.params.id) ?
                    <div className='pdpMain'>
                        <div className='pdpMain__productGalery' onClick={this.handleGalery.bind(this)}>
                            {product.gallery.map((images, i) => { return(
                            <img key={i} className='pdpMain__productGalery__images' 
                            src={images} alt="productPicture" 
                            onClick={() =>this.props.handleGalery(i)} />)})
                            }
                        </div> 
                        <img key={product.gallery} className='pdpMain__productImage' 
                             src={product.gallery[this.props.galery]} 
                             alt="productPicture" />
                             
                            <div className='pdpMain__description'>
                            <section className='pdpMain__description__productName'>
                            {product.name} 
                            </section>
                            <div>
                                {product.attributes.map(
                                    attribute => (
                                        (attribute.name === "Color") ?
                                                <div className='pdpMain__description__attributes'>
                                                    <div  className='pdpMain__description__attribute'>
                                                        {attribute.name}:
                                                    </div>
                                                    {attribute.items.map(item =>{
                                                        return (<button className='pdpMain__description__value' style={{backgroundColor: item.value, color: "#44014C"}}>
                                                                    {item.displayValue}
                                                                </button>)
                                                    })}
                                                </div>
                                                : 
                                                <div className='pdpMain__description__attributes'>
                                                    <div  className='pdpMain__description__attribute'>
                                                        {attribute.name}:
                                                    </div>
                                                    {attribute.items.map(item =>{
                                                        return (<button className='pdpMain__description__value'>
                                                                    {item.value}
                                                                </button>)
                                                    })}
                                                </div>
                                                )
                                )}
                            </div>
                            {product.prices.map((pricing, index) => (
                                (pricing.currency === this.props.currency.value) ?<div>
                                    <div className='pdpMain__description__productPrice1'>PRICE:</div> 
                                    <div className='pdpMain__description__productPrice2' key={pricing.currency}>
                                        {this.props.currency.label}{pricing.amount}
                                    </div>
                                    {(product.inStock === true) ?
                                    <div onClick={ this.handleClick.bind(this) }>
                                    <button key={index} className='pdpMain__description__button' onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                                    ADD TO CART
                                    </button>
                                    </div> : null}
                                    <div key={index} className='pdpMain__description__productDescription'>{converter(product.description)}</div>
                                </div>
                            : null
                            ))}
                            </div>
                    </div>
                    : null
                )
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='pdpPaddings'>
                {this.displayProducts()}
            </div>
        )
    }
}

export default withRouter(ProductDescription);