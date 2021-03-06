
import Button from '@material-ui/core/Button';


import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:"",
        content: "",
    });
    
    const InputEvent = (event)=>{
         const {name, value} = event.target;

        setNote((prevData)=>{
            return {
                ...prevData, 
                [name] : value,
            }
        })
    }

const addEvent = () => {
    props.passNote(note)
    setNote({
        title:"",
        content: "",
    })
}

 return(
     <>
     <div className = "main_note">
     
     
         <form>
             <input 
             type="text" 
             name = "title"
             value= {note.title}
             onChange = {InputEvent}
              placeholder ="Title" 
             autoComplete = "off"/>
             <br/>
             <textarea 
             rows = "" 
             column = "" 
             placeholder = "write a note ..."
            name = "content"
            value = {note.content}
            onChange= {InputEvent}
             />
             <Button variant="outlined" className = "btn" onClick = {addEvent}><AddIcon/></Button>
         </form>
     </div>
     </>
 );
}

export default CreateNote;