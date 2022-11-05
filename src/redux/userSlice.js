import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const login = createAsyncThunk(
    'users/login',
    async (credential, thunkAPI) => {
        const response = await axios.post(`${API_BASE_URL}/auth/authenticate`,
            {
                username: credential.username,
                password: credential.password
            })
        return response.data
    })

const usersSlice = createSlice({
    name: 'users',
    initialState,

    extraReducers: builder => {

        builder.addCase(login.pending, state => {
            state.loading = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('is_staff', action.payload.is_staff)
            localStorage.setItem('name', action.payload.first_name+' '+action.payload.last_name)
            localStorage.setItem('loggedInUser', JSON.stringify(action.payload))
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.error.message
            throw new Error(action.error.message)

        })
    }
})

export default usersSlice.reducer