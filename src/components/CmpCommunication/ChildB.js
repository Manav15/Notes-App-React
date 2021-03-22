import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ChildB extends Component {
    render() {
        return (
            <div>
                Email : {this.props.email}
            </div>
        );
    }
}

ChildB.propTypes = {
    email : PropTypes.string.isRequired
}


export default ChildB;
