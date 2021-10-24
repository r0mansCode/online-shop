import React, { Component } from 'react'

const link = "https://rukminim1.flixcart.com/image/714/857/k3xcdjk0pkrrdj/shoe/m/u/j/10-ds-1603-d-sneakerz-dss-16603-white-10-original-imaf8uh4a7fecktf.jpeg?q=50"
const products = [
        <img src={link} className="shoesLogo" alt="Shoes" />,
        <img src={link} className="shoesLogo" alt="Shoes" />,
        <img src={link} className="shoesLogo" alt="Shoes" />,
        <img src={link} className="shoesLogo" alt="Shoes" />,
        <img src={link} className="shoesLogo" alt="Shoes" />,
        <img src={link} className="shoesLogo" alt="Shoes" />,
];

export class Kids extends Component {
    render() {
        return (
            <div>
                Kids
                <div className="products">
                    { products }
                </div>
            </div>
        )
    }
}

export default Kids;