import {configureStore} from '@reduxjs/toolkit'
import {usersReducer} from "./template/reducer";

export const store = configureStore({
        reducer: {
            users: usersReducer.reducer
        }
    }
)

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore["dispatch"]