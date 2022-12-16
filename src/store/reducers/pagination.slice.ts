import {createSlice} from '@reduxjs/toolkit';
import {filtersSlice} from "./filters.slice";

interface IState {
    page: number;
    reviewsPage: number;
}

const initialState: IState = {
    page: 1,
    reviewsPage: 1,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setReviewsPage: (state, action) => {
            state.reviewsPage = action.payload;
        },
    },
    extraReducers: {
        [filtersSlice.actions.setKeyword.type]: (state) => {state.page = 1},
        [filtersSlice.actions.setType.type]: (state) => {state.page = 1},
        [filtersSlice.actions.setOrder.type]: (state) => {state.page = 1},
        [filtersSlice.actions.setGenre.type]: (state) => {state.page = 1},
    }
});

export const {setPage, setReviewsPage} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;