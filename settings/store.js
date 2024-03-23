import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './reducers/moviesThunk'
export const store = configureStore({

  //reducer must be written
  reducer: {
    booksList:booksReducer
  },
})