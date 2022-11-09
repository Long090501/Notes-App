import Note from './Note'
import AddNote from './AddNote'

function NotesList() {
    return (
        <div className = 'notes-list'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <AddNote/>
        </div>
    )
}

export default NotesList