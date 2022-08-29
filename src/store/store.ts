import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {serviceAPI} from "../_services/serviceAPI";

const rootReducer = combineReducers({
    [serviceAPI.reducerPath]: serviceAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serviceAPI.middleware),
    });
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>