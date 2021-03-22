import React, { Component } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

class Parent extends Component {
    display = () =>{
        alert("Who is this?");
    }

    render() {
        let age = 30;
        let email = "test@test.com";
        return (
            <div>
                <ChildA name = "foo" age = {age} display= {this.display} />
                <hr />
                <ChildB email = {email} />
            </div>
        );
    }
}

export default Parent;
