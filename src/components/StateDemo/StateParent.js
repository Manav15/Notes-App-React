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

    onDecrement = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    onReset = () =>{
        this.setState({counter : 0})
    }

    render() {
        return (
            <div>
                <StateChild counter = {this.state.counter} onIncrease = {this.onIncrement} onReset = {this.onReset} onDecrease= {this.onDecrement}/>
            </div>
        );
    }
}

export default StateParent;
