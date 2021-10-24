import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav>
               <Link to="/">WOMEN</Link>
               <Link to="/Men">MEN</Link> 
               <Link to="/Kids">KIDS</Link> 
            </nav>
        )
    }
}

export default Navbar;