import {createSlice} from "@reduxjs/toolkit";

interface dropDownState {
    currentOption: { label: string, value: string };
    isOpen: boolean
}

const initialState: dropDownState = {
    currentOption: {label: 'Все', value: "ALL"},
    isOpen: false
}


export const dropDownSlice = createSlice({
    name: 'dropDown',
    initialState,
    reducers: {
        changeCurrentOption: (state, action) => {
            state.currentOption = action.payload
        },
        toggleMenu: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const {
    changeCurrentOption,
    toggleMenu
} = dropDownSlice.actions;

export const dropDownReducer = dropDownSlice.reducer;