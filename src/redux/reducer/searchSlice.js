import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        filterText: ''
    },
    reducers: {
        setFilterText: (state, action) => {
            state.filterText = action.payload
        }
    }
    }
)

export default searchSlice