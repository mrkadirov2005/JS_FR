import { createSlice } from "@reduxjs/toolkit";
import { getPhotoById } from "./photoThunk/photoThunk";

const initialState={
    photo:[],
    isLoading:false,
    status:'fulfilled' | 'rejected' | 'pending'
}
export const photoSlice=createSlice({
    name:'photo',
    initialState,
    reducers:{
        setPhoto:(state,action)=>{
            state.photo=action.payload
        }
    },
    extraReducers(builder){
builder
.addCase(getPhotoById.fulfilled,(state,action)=>{
    state.isLoading=false
    state.status='fulfilled'
    state.photo=action.payload
})
.addCase(getPhotoById.rejected,(state,action)=>{
    state.isLoading=false
    state.status='rejected'
    state.photo=[]
})
.addCase(getPhotoById.pending,(state,action)=>{
    state.isLoading=false
    state.status='pending'
    state.photo=[]
})

    }
})
export const {setPhoto}= photoSlice.actions
export default photoSlice.reducer