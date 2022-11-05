import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from '../redux/gallerySlice';
import postsReducer from '../redux/postSlice';
import userReducer from '../redux/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    galleries: galleryReducer,
    posts: postsReducer,
  },
});
