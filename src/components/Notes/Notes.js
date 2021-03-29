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
        ],
        showForm:false
    }

    onAddNewItem=(title,body)=>{
        const newNote={
            id : this.state.notes.length + 1,
            title,
            body
        }

        this.setState({
            notes : [...this.state.notes,newNote]
        })
    }
    render() {
        let myForm=null;
        if(this.state.showForm)
        {
            myForm = <NoteForm addNewItem = {(title,body)=> this.onAddNewItem(title,body)}/>           
        }
        return (
            <div>
                <br />
                <NoteList notes = {this.state.notes} />
                <br />
                <button className="btn btn-warning" onClick={() => this.setState({showForm : !this.state.showForm}) }>Show Form</button>
                <hr />
                {myForm}
            </div>
        );
    }
}

export default Notes;
