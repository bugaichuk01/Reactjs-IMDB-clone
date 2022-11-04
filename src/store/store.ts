import {serviceAPI} from "_/serviceAPI";
import {searchReducer} from "./reducers/search.slice";
import {dropDownReducer} from "./reducers/dropDown.slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    dropDownReducer: dropDownReducer,
    searchReducer: searchReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serviceAPI.middleware),
    });
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<AppStore['getState']>