import React, { Component } from 'react';
import ChildA from './ChildA';

class Parent extends Component {
    render() {
        return (
            <div>
                <ChildA name = "foo" />
            </div>
        );
    }
}

export default Parent;
