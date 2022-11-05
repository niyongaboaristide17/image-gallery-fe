import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (post, thunkAPI) => {
        const token = localStorage.getItem('token')
        let data = new FormData()
        data.append('title', post.title)
        data.append('description', post.description)
        data.append('image', post.image)
        data.append('gallery', post.gallery)
        const response = await axios.post(`${API_BASE_URL}/posts`, data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
        )
        return response.data
    })

export const getPosts = createAsyncThunk(
    'posts/createPost',
    async ( id, thunkAPI) => {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${API_BASE_URL}/posts?${id ? 'gallery='+id:''}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }
        )
        return response.data
    })

const postsSlice = createSlice({
    name: 'posts',
    initialState,

    extraReducers: builder => {

        builder.addCase(getPosts.pending, state => {
            state.loading = true
        })

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })

        builder.addCase(getPosts.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.error.message
            throw new Error(action.error.message)

        })

    }
})

export default postsSlice.reducer