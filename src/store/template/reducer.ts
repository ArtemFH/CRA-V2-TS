import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./actions";

interface Users {
    id: number,
    name: string,
    email: string
}

interface CounterState {
    users: Users[];
    isLoading: boolean;
    errors: string;
}

const initialState: CounterState = {
    users: [],
    isLoading: false,
    errors: ''
};

export const usersReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<[]>) => {
            state.errors = '';
            state.isLoading = false;
            state.users = action.payload
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.errors = action.payload;
            state.isLoading = false;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        }
    }
})

export default usersReducer.actions
