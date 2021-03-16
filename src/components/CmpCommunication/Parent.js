import React, { Component } from 'react';
import ChildA from './ChildA';

class Parent extends Component {
    display = () =>{
        alert("Who is this?");
    }

    render() {
        let age = 30;
        return (
            <div>
                <ChildA name = "foo" age = {age} display= {this.display} />
            </div>
        );
    }
}

export default Parent;
