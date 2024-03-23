import { createSlice } from '@reduxjs/toolkit'
import { getMovieByTitle,getMovieListWithPlot,getMovieListWithYear } from './thunks/movieThunk'


const initialState={
    booklist:[],
    status:'',
    error:{
        message:'',
        status:true
    },
    theme:'true',
    request_type:'title'

}

const booksSlice = createSlice({
  name: 'books_list',
  initialState:initialState,
  reducers: {
    toggle_theme(state){
        state.theme=='true'?state.theme='false':state.theme='true'
    },
    set_request_type(state,action){
        state.request_type=action.payload
    }
  },
  extraReducers(builder){
    builder
    .addCase(getMovieByTitle.fulfilled,(state,action)=>{
        state.booklist=action.payload
        state.error={}
        state.status='fulfilled'
    })
    .addCase(getMovieByTitle.rejected,(state,action)=>{
        state.booklist=[]
        state.error.message=action.payload
        state.status='rejected'
        state.error.status=true

    })
    .addCase(getMovieByTitle.pending,(state)=>{
        state.status='pending'
        state.booklist=[]
        state.error.message=''
        state.error.status=false
    })
    .addCase(getMovieListWithYear.fulfilled,(state,action)=>{
        state.booklist=action.payload
        state.status='fulfilled'
        state.error.message=""
        state.error.status=false

    })
    .addCase(getMovieListWithYear.rejected,(state,action)=>{
        state.booklist=[]
        state.status='rejected'
        state.error.message=action.payload
        state.error.status=true

    })
    .addCase(getMovieListWithYear.pending,(state)=>{
        state.status='pending'
        state.booklist=[]
        state.error.message=''
        state.error.status=false
    })
    .addCase(getMovieListWithPlot.fulfilled,(state,action)=>{
        state.booklist=action.payload
        state.status='fulfilled'
        state.error.message=""
        state.error.status=false
    })
    .addCase(getMovieListWithPlot.rejected,(state,action)=>{
        state.booklist=[]
        state.status='rejected'
        state.error.message=action.payload
        state.error.status=true

    })
    .addCase(getMovieListWithPlot.pending,(state)=>{
        state.status='pending'
        state.booklist=[]
        state.error.message=''
        state.error.status=false
    })

  }
})
export const {toggle_theme,set_request_type} = booksSlice.actions

export default  booksSlice.reducer