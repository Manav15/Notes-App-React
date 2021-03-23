import React, { Component } from 'react';
import "./NoteForm.css";

class NoteForm extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                    <h2 className="form-heading">New Note Form</h2>
                    <form>
                        <div className="form-group">
                            <label className="form-body">Title : </label>
                            <input type="text" className="form-control" />
                        </div> 
                        <div className= "form-group">
                            <label className="form-body">Body : </label>
                            <input type="text" className="form-control" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default NoteForm;
