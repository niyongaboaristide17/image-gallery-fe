import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const createGallery = createAsyncThunk(
    'gallery/createGallery',
    async (gallery, thunkAPI) => {
        const token = localStorage.getItem('token')
        const response = await axios.post(`${API_BASE_URL}/galleries`, gallery, {
            headers: {
                Authorization: `Token ${token}`
            }
        }
        )
        return response.data
    })

export const getGalleries = createAsyncThunk(
    'gallery/getGalleries',
    async (gallery, thunkAPI) => {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${API_BASE_URL}/galleries`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }
        )
        return response.data
    })

const galleriesSlice = createSlice({
    name: 'galleries',
    initialState,

    extraReducers: builder => {

        builder.addCase(createGallery.pending, state => {
            state.loading = true
        })

        builder.addCase(createGallery.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })

        builder.addCase(createGallery.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.error.message
            throw new Error(action.error.message)

        })

        builder.addCase(getGalleries.pending, state => {
            state.loading = true
        })

        builder.addCase(getGalleries.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })

        builder.addCase(getGalleries.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.error.message
            throw new Error(action.error.message)

        })
    }
})

export default galleriesSlice.reducer