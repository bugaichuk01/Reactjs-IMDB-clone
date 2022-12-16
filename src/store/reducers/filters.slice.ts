import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: 'RATING',
    type: 'FILM',
    keyword: '',
    genre: '',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        setGenre: (state, action) => {
            state.genre = action.payload;
        },
    },
});

export const { setOrder, setType, setKeyword, setGenre } =
    filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;