import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './Users/usersSlice'
import userReducer from "../reducers/userSlice/userSlice"
import postsReducer from './postsSlice/postSlice'
import postReducer from './postSlice/postSlice'
import photosReducer from './photosSlice/photosSlice'
import photoReducer from './photoSlice/photoSlice'
import photoSlice from "./photoSlice/photoSlice";


export const store=configureStore({
    reducer:{
        users:usersReducer,
        user:userReducer,
        posts:postsReducer,
        post:postReducer,
        photos:photosReducer,
        photo:photoSlice
    }
})