import React, { Component } from 'react';
import EditNote from './EditNote/EditNote';
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
        showForm:false,
        selectedNoteId:null
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

    getId = (id) => {
        console.log("Selected Note Id - ",id);
        this.setState({
            selectedNoteId : id
        })
    }

    onDeleteItem = (id) =>{
        const duplicateNotes =  this.state.notes.filter(note => note.id !== id)
        this.setState({
            notes : [...duplicateNotes],
            selectedNoteId:null
        })
    }

    onUpdateItem = (id,body) =>{
        const noteFound=this.state.notes.find(note => note.id === id);
        noteFound.body=body;
        const duplicateNotes=this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes:[...duplicateNotes,noteFound],
            selectedNoteId : null
        })
    }

    render() {
        let myForm=null;
        let editNote=null;
        
        if(this.state.selectedNoteId){
            const note = this.state.notes.find(note => note.id === this.state.selectedNoteId)
            editNote = <EditNote note={note} 
            onDeleteItem = {(id) => this.onDeleteItem(id)}
            cancelItem = {() => this.setState({selectedNoteId : null })}
            onUpdateItem = {(id,body) => this.onUpdateItem(id,body)} />
        }
 
        if(this.state.showForm)
        {
            myForm = <NoteForm addNewItem = {(title,body)=> this.onAddNewItem(title,body)}/>           
        }
        return (
            <div>
                <br />
                <NoteList notes = {this.state.notes} 
                    getId= {id => this.getId(id)}/>
                <br />
                <button className="btn btn-warning" onClick={() => this.setState({showForm : !this.state.showForm}) }>Show Form</button>
                <hr />
                {myForm}
                <br />
                {editNote}
            </div>
        );
    }
}

export default Notes;
