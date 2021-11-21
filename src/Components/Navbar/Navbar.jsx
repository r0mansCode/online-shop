import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function a (leng) {return leng.length};

export class Navbar extends Component {


    render() {
        return (
            <nav>
                <section className="navBar">
                        <Link className="navBar__Category" to="/">All</Link>
                        <Link className="navBar__Category" to="/Clothes">Clothes</Link> 
                        <Link className="navBar__Category" to="/Tech">Tech</Link> 
                        <Link className="navBar__icon" to="/"><AiOutlineShopping  /></Link>
                        <Link className="navBar__icon2" to="Cart"><HiOutlineShoppingCart />
                                                                <div className="navBar__icon2__length">{a(this.props.productCart)}</div></Link>
                        {/* <select><option>$</option></select> */}
                </section>
            </nav>
        )
    }
}

export default Navbar;