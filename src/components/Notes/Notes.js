import React, { Component } from 'react';
import NoteForm from './NewNoteForm/NoteForm';
import NoteList from './NoteList/NoteList';

class Notes extends Component {
    state = {
        notes : [
            {id : 1, title : "Shopping" ,body : "Buy the jeans" },
            {id : 2, title : "Grocery" ,body : "Buy the pulses" },
            {id : 3, title : "Plants" ,body : "Water your lily" },
            {id : 4, title : "Insurance" ,body : "Renew Insurance" }
        ]
    }

    render() {
        return (
            <div>
                <NoteList notes = {this.state.notes} />
                <hr />
                <NoteForm />           
            </div>
        );
    }
}

export default Notes;
