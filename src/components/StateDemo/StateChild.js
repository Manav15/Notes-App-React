import React from 'react';

const StateChild = (props) => {
    return (
        <div>
            <h3>Counter : {props.counter}</h3>
            <div className="btn-group">
                <button onClick = {props.onIncrease} className="btn-success ">Increment</button>
                <button onClick = {props.onReset} className="btn-dark " >Reset</button>
                <button onClick = {props.onDecrease} className="btn-danger " >Decrement</button>
            </div>
        </div>
    );
}

export default StateChild;
