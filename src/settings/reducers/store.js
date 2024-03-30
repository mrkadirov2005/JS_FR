import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from './Users/usersSlice'
import userReducer from "../reducers/userSlice/userSlice"
import postsReducer from './postsSlice/postSlice'
import postReducer from './postSlice/postSlice'
import photosReducer from './photosSlice/photosSlice'
import photoReducer from './photoSlice/photoSlice'
import photoSlice from "./photoSlice/photoSlice";
import authReducer from "./Auth/AuthSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
  }

  const reducers=combineReducers({
    auth:authReducer,
    users:usersReducer,
    user:userReducer,
    posts:postsReducer,
    post:postReducer,
    photos:photosReducer,
    photo:photoSlice
  })


const persistedReducer=persistReducer(persistConfig,reducers)

export const store=configureStore({
    reducer:persistedReducer,
    
})

export const persister=persistStore(store)