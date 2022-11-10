import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import notesListSlice from '../redux/reducer/notesListSlice'

function AddNote() {
    const [note, setNote] = useState('')
    const dispatch = useDispatch()
    const characterLimit = 200

    const handleChange = (e) => {
        if(e.target.value.length <= characterLimit) {
            setNote(e.target.value)
        }
    }

    const handleClick = () => {
        const date = new Date()
        if(note.trim().length > 0) {
            dispatch(notesListSlice.actions.addNote({
                id: nanoid(),
                note: note,
                date: date.toLocaleDateString()
            }))
            setNote('')
        }
    }

    return (
        <div className = 'add-note'>
            <textarea
                row = '8'    //kích thước 
                col = '10'    //textarea
                placeholder = 'Type to add a note...'
                onChange = {handleChange}
                value = {note}
            ></textarea>
            <div className = 'add-note__footer'>
                <small>{characterLimit - note.length}</small>
                <button onClick = {handleClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote