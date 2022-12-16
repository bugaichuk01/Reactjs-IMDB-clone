import {serviceAPI} from "_/serviceAPI";
import {searchReducer} from "./reducers/search.slice";
import {filtersReducer} from "./reducers/filters.slice";
import {dropDownReducer} from "./reducers/dropDown.slice";
import {paginationReducer} from "./reducers/pagination.slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    dropDownReducer: dropDownReducer,
    searchReducer: searchReducer,
    paginationReducer: paginationReducer,
    filtersReducer: filtersReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serviceAPI.middleware),
    });
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<AppStore['getState']>