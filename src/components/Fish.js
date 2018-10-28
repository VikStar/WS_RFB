import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
    handleClick = (event) => {
        this.props.addToOrder(this.props.index);
    }
    
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Cart' : 'Sold Out'}
                </button>
            </li>
        );
    }
}