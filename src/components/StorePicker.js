import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };
    
    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                    ref={this.myInput} />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}