import { createSlice } from "@reduxjs/toolkit";
import { getPostsList } from "./postsThunk/postsThunk";


const initialState={
    postslist:[],
    status:'pending' | 'rejected' | 'fulfilled',
    isLoading:false
}

const postsSLice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
builder.addCase(getPostsList.fulfilled,(state,action)=>{
    state.postslist=action.payload
    console.log(action.payload)
    state.status='pending'
    state.isLoading=false

})
.addCase(getPostsList.rejected,(state,action)=>{
    state.isLoading=false
    state.status='rejected'
    state.postslist=[]

})
.addCase(getPostsList.pending,(state,action)=>{
    state.isLoading=true
    state.postslist=[]
    state.status='pending'
})
    }

})
export default postsSLice.reducer