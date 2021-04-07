import React, { Component } from 'react';

class RefsDemo extends Component {
    inputRef=React.createRef();

    handleClick=(event) => {
        event.preventDefault()
        console.log("Response of REF - ",this.inputRef.current)
    }

    render() {
        return (
            <div>
                <form>
                    <label>Input 1:</label>
                    <input type="text" ref={this.inputRef} />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );
    }
}

export default RefsDemo;
