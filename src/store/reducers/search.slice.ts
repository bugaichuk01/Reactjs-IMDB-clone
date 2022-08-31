import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    search: '',
    isOpen: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        toggleSearch: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const {
    setSearch,
    toggleSearch
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;