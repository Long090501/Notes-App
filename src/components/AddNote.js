
function AddNote() {
    return (
        <div className = 'add-note'>
            <textarea
                row = '8'    //kích thước 
                col = '10'    //textarea
                placeholder = 'Type to add a note...'
            ></textarea>
            <div className = 'add-note__footer'>
                <small>200 remaining</small>
                <button>Save</button>
            </div>
        </div>
    )
}

export default AddNote