import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiDollar } from 'react-icons/bi';
import { BiPound } from 'react-icons/bi';
import { BiYen } from 'react-icons/bi';
import { BiRuble } from 'react-icons/bi';
import Select from 'react-select'

function a (leng) {return leng.length};
function sum (amounT) {return amounT.reduce((a,v) => a = a + v.amount, 0)};
function round(pricE) {return pricE.toFixed(2)};


const options = [
    {value: 'USD', label: <div><BiDollar className='navBar__switcher__label'/>USD</div>, rate: 1},
    {value: 'GBP', label: <div><BiPound className='navBar__switcher__label'/>GBP</div>, rate: 0.718786},
    {value: 'JPY', label: <div><BiYen className='navBar__switcher__label'/>JPY</div>, rate: 107.99181},
    {value: 'RUB', label: <div><BiRuble className='navBar__switcher__label'/>RUB</div>, rate: 75.6225089},
    {value: 'AUD', label: <div>A<BiDollar className='navBar__switcher__label'/>AUSD</div>, rate: 1.29 }
];


export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        };
    
      handleClick(event) {
        event.preventDefault();
    };

      handleClickRemove(event) {
        event.preventDefault();
    };

    handleCurrency(event) {
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
                                <div className='cartNav' key={index}> 

                                    <div className='cartNav__firstSection'>
                                        <div className='cartNav__firstSection__productName'>
                                            {product.name}
                                        </div>
                                        {product.prices.map((pricing, indexx) => (
                                            (pricing.currency === this.props.currency.value) ? 
                                                <div className='cartNav__firstSection__productPrice' key={indexx}>
                                                    <div>
                                                        {this.props.currency.label} {pricing.amount}
                                                    </div>
                                                </div>
                                            : null
                                        ))}
                                         <div>
                                            {product.attributes.map(
                                                attribute => (
                                                    (attribute.name === "Color") ?
                                                            <div className='navBar__firstSection__productAttributes'>
                                                                {attribute.items.map(item =>{
                                                                    return (<button className='navBar__firstSection__value' style={{backgroundColor: item.value, color: "#44014C"}}>
                                                                            </button>)
                                                                })}
                                                            </div>
                                                            : 
                                                            <div className='navBar__firstSection__productAttributes'>
                                                                {attribute.items.map(item =>{
                                                                    return (<button className='navBar__firstSection__value'>
                                                                                {item.value}
                                                                            </button>)
                                                                })}
                                                            </div>
                                                            )
                                            )}
                                        </div>
                                    </div>
                                {product.prices.map((pricing, indexx) => (indexx === 0) ? 
                                        <div className='cartNav__secondSection'>
                                            <div className='cartNav__secondSection__buttons'>
                                                <div onClick={ this.handleClick.bind(this) }>
                                                    <button className='cartNav__secondSection__buttons__button' onClick={() =>this.props.handleClick(product.id, pricing.amount)}>
                                                    +
                                                    </button>
                                                </div>
                                                <div>
                                                    {a(cartArray.filter(item => item.id === product.id))}
                                                </div>
                                                <div onClick={ this.handleClickRemove.bind(this) }>
                                                    <button className='cartNav__secondSection__buttons__button' onClick={() => this.props.handleClickRemove(ind)}>
                                                    -
                                                    </button>
                                                </div>
                                            </div>
                                                <div className='cartNav__secondSection__container'>
                                                    <img className='cartNav__secondSection__image' src={product.gallery[0]} alt="productPicture" />
                                                </div>
                                        </div> 
                                    : null )}

                                </div>
                            : null
                    ))
                )}
            )
    }

    displayCurrencySwitcher(){
        return (
            <div  onChange={ this.handleCurrency.bind(this) }>
                <Select className='navBar__switcher'
                        options={options} 
                        defaultValue={{ label: <div ><BiDollar className='navBar__switcher__labelInitial'/>USD</div>, value: 'USD' }} 
                        onChange={this.props.handleCurrency} />
            </div>
        )
    }

    totalAmount(){
        return round(sum(this.props.productCart)*this.props.currency.rate)
    }


    render() {
        return (
            <nav className="navBar">
                        <Link className="navBar__Category" to="/">All</Link>
                        <Link className="navBar__Category" to="/clothes">Clothes</Link> 
                        <Link className="navBar__Category" to="/tech">Tech</Link> 
                        <Link className="navBar__icon" to="/"><AiOutlineShopping  /></Link>
                        {this.displayCurrencySwitcher()}
                        <Link className="navBar__icon2" to="Cart">
                            <HiOutlineShoppingCart />
                            <div className="navBar__icon2__length">{a(this.props.productCart)}</div>
                            <div className="navBar__icon2__cartOverlay">
                                <div className='myBag'>My Bag, <div className='myBagInLine'>{a(this.props.productCart)} items</div></div>
                                {this.displayProducts()}
                                <div className='total'>Total <div className='amount'> {this.totalAmount()}</div></div>
                                <div className='overlayButtons'>
                                    <button className='overlayButtons__view'>View Bag</button>
                                    <button className='overlayButtons__checkOut'>Check out</button>
                                </div>                              
                            </div>
                            <div className='navBar__icon2__backdrop'></div>
                        </Link>
            </nav>
        )
    }
}

export default Navbar;