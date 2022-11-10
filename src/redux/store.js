import { configureStore } from '@reduxjs/toolkit'
import notesListSlice from './reducer/notesListSlice'
import searchSlice from './reducer/searchSlice'

const store = configureStore({
    reducer: {    //không cần combineReducers
        notesList: notesListSlice.reducer,    //gọi reducer,
        search: searchSlice.reducer 
    }
})

export default store

