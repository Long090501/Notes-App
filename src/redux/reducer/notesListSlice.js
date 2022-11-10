import { createSlice } from '@reduxjs/toolkit'

const notesData = JSON.parse(localStorage.getItem('notes-list-data'))

const notesListSlice = createSlice({
    name: 'notesList',
    initialState: notesData ? notesData : [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('notes-list-data',JSON.stringify(state))
        },   //tự động tạo ra 1 action có type: 'notesList/addNote' -> không cần file action riêng
        removeNote: (state, action) => {
            const removed = state.filter((note) => note.id !== action.payload)
            localStorage.setItem('notes-list-data',JSON.stringify(removed))
            return state.filter((note) => note.id !== action.payload)    //phải thêm return
        }
    }
    }
)

export default notesListSlice