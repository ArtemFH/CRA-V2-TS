import {createAsyncThunk} from "@reduxjs/toolkit";
import usersApi from "../../api/requests/users"

export const fetchUsers = createAsyncThunk('user/login', async () => {
    const response = await usersApi.getUsers()
    return response.data
})
