import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {usersReducer} from "./template/reducer";

const rootReducer = combineReducers({})
export const store = () => {
    return configureStore({
        reducer: {
            users: usersReducer.reducer
        }
    })
}

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<typeof rootReducer>
