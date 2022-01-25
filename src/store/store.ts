import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {templateReducer} from "./template/reducer";

const rootReducer = combineReducers({
    template: templateReducer.reducer
})
export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']