import React,{useState,useEffect } from 'react';

const HooksDemo = () => {
    let [counter,setCounter]=useState(0);
    
    useEffect(() => {
        console.log("Use Effect ..");
    })

    return (
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={() => setCounter( () => counter+1 ) }>Increase</button>
        </div>
    );
}

export default HooksDemo;
