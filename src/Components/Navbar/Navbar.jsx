import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export class Navbar extends Component {


    render() {
        return (
            <nav>
                <section className="navBar">
                        <Link className="navBar__Category" to="/">WOMEN</Link>
                        <Link className="navBar__Category" to="/Men">MEN</Link> 
                        <Link className="navBar__Category" to="/Kids">KIDS</Link> 
                        <Link className="navBar__icon" to="/"><AiOutlineShopping  /></Link>
                        <Link className="navBar__icon2" to="Cart"><HiOutlineShoppingCart  /></Link>
                        {/* <select><option>$</option></select> */}
                </section>
            </nav>
        )
    }
}

export default Navbar;