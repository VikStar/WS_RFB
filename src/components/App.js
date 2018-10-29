import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);

        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes }
        // 2. Add out new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to the state
        this.setState({ fishes });
    }

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of a current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        // 1. Take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({ order });
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes} updateFish={this.updateFish} />
            </div>
        );
    }
}