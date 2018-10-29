import React, { Component } from 'react';

export default class EditFishForm extends Component {
    handleChange = (event) => {
        // 1. Take a copy of a current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        
        this.props.updateFish(this.props.index, updatedFish);
    }
    
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            </div>
        );
    }
}