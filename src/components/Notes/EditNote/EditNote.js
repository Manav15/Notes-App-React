import React, { Component } from 'react';

class EditNote extends Component {

    state={
        body : this.props.note.body
    }

    handleBodyChange=(event) =>{
        this.setState({
            body: event.target.value
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            {this.props.note.title.toUpperCase()}
                        </div>
                        <div className="card-body">
                            <form>
                                <label>Edit Note Form</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.body} 
                                onChange={this.handleBodyChange}/>
                                <br />
                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <button className="btn btn-success btn-block">Update</button>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <button className="btn btn-danger btn-block">Cancel</button>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <button className="btn btn-secondary btn-block">Delete</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote;
