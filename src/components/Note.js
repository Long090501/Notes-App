import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import notesListSlice from '../redux/reducer/notesListSlice'

function Note(props) {
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(notesListSlice.actions.removeNote(id))
    }

    return (
        <div className = 'note'>
            <span>{props.note.note}</span>    {/*Tag <span> được sử dụng để nhóm các inline trong văn bản HTML.
                                              Ta có thể dùng span kèm với css để định dạng một phần nội dung trong văn bản HTML*/}
            <div className = 'note__footer'>
                <small>{props.note.date}</small>    {/*Tag <small> dùng để định nghĩa các đoạn chữ nhỏ*/}
                <MdDeleteForever className = 'delete-icon' size = '1.3em' onClick = {() => handleClick(props.note.id)}></MdDeleteForever>
            </div>                     
        </div>
    )
}

export default Note