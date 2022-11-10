import Note from './Note'
import AddNote from './AddNote'
import { useSelector } from 'react-redux'

function NotesList() {
    const notesList = useSelector(state => state.notesList)
    const searchText = useSelector(state => state.search)

    const filteredNotesList = () => {
        if(Boolean(searchText.filterText)) {
            return notesList.filter((note) => note.note.toLowerCase().includes(searchText.filterText.trim()))
        }
        return notesList
    }

    return (
        <div className = 'notes-list'>
            {filteredNotesList().map((note, index) => {
                return <Note key = {index} note = {note}/>
            })}
            <AddNote/>
        </div>
    )
}

export default NotesList