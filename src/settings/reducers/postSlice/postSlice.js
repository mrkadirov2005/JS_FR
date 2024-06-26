import { createSlice } from "@reduxjs/toolkit";
import { getPostById } from "./postThunk/postThunk";

const initialState={
    post:[],
    isLoading:false,
    status:'fulfilled' | 'rejected' | 'pending'
}
export const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        setPost:(state,action)=>{
            state.post=action.payload
        }
    },
    extraReducers(builder){
builder
.addCase(getPostById.fulfilled,(state,action)=>{
    state.isLoading=false
    state.status='fulfilled'
    state.post=action.payload
})
.addCase(getPostById.rejected,(state,action)=>{
    state.isLoading=false
    state.status='rejected'
    state.post=[]
})
.addCase(getPostById.pending,(state,action)=>{
    state.isLoading=false
    state.status='pending'
    state.post=[]
})
    }
})
export const {setPost}=postSlice.actions
export default postSlice.reducer