import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./actions";
import {IUser} from "../../models/IUser";

export interface CounterState {
    users: IUser[];
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
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
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
