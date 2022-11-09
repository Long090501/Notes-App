import { MdDeleteForever } from 'react-icons/md'
function Note() {
    return (
        <div className = 'note'>
            <span>Note</span>    {/*Tag <span> được sử dụng để nhóm các inline trong văn bản HTML.
                                 Ta có thể dùng span kèm với css để định dạng một phần nội dung trong văn bản HTML*/}
            <div className = 'note__footer'>
                <small>9/11/2022</small>    {/*Tag <small> dùng để định nghĩa các đoạn chữ nhỏ*/}
                <MdDeleteForever className = 'delete-icon' size = '1.3em'></MdDeleteForever>
            </div>                     
        </div>
    )
}

export default Note