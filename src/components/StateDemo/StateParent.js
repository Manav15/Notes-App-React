import React, { Component } from 'react';
import StateChild from './StateChild';

class StateParent extends Component {
    state = {
        counter : 0
    }

    onIncrement = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    } 

    render() {
        return (
            <div>
                <StateChild counter = {this.state.counter} onIncrease = {this.onIncrement}/>
            </div>
        );
    }
}

export default StateParent;
