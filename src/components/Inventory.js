import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

export default class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}