import React from 'react';
import "./NoteItem.css";

const NoteItem = (props) => {
    // getId= (event) => {
    //     event.preventDefault();
    //     props.itemId(props.note.id)
    // }
    return (
        <div className="col-sm-12 col-md-6">
            <div className = "card margin-card"
            onClick={() => props.selectedNote(props.note.id)} >
                <div className = "card-header text-center">
                    {props.note.title.toUpperCase()}
                </div>
            </div>
        </div>
    );
}

export default NoteItem;
