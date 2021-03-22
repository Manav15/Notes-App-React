import React from 'react';

const StateChild = (props) => {
    return (
        <div>
            <h3>Counter : {props.counter}</h3>
            <button onClick = {props.onIncrease}>Increment</button>
        </div>
    );
}

export default StateChild;
