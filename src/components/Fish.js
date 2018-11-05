import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
    static propTypes = {
        addToOrder: PropTypes.func,
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    }
    
    handleClick = (event) => {
        this.props.addToOrder(this.props.index);
    }
    
    render() {
        const { PUBLIC_URL: baseUrl } = process.env;
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        
        return (
            <li className="menu-fish">
                <img src={baseUrl+image} alt={name} />
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