import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Note = (props) =>{
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
      <div className="note">
          <h1>{props.title}</h1>
          <br></br>
          <p> {props.content}</p>
          <Button variant="outlined" onClick= {deleteNote} className = "btn"><DeleteIcon className = "delete"/></Button>
  

      </div>
        </>
    )
}
export default Note;