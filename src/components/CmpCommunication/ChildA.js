import React from 'react';

const ChildA = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Child A Works</h2>
            <p>Name : {props.name} </p>
            <p>Age : {props.age} </p>
            <button onClick={() => props.display()} >Click Me</button>
        </div>
    );
}

export default ChildA;
