import {configureStore} from '@reduxjs/toolkit'
import {usersReducer} from "./template/reducer";

export const store = () => {
    return configureStore({
        reducer: {
            users: usersReducer.reducer
        }
    })
}

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore["dispatch"]
