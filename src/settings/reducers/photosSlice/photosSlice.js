import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "./photosThunk/photosThunk";

const initialState={
    photos:[],
    isLoading:false,
    status:'fulfilled' | 'rejected' | 'pending'
}
export const photosSlice=createSlice({
    name:'photos',
    initialState,
    reducers:{},
    extraReducers(builder){
builder
.addCase(getPhotos.fulfilled,(state,action)=>{
    state.isLoading=false
    state.status='fulfilled'
    state.photos=action.payload
})
.addCase(getPhotos.rejected,(state,action)=>{
    state.isLoading=false
    state.status='rejected'
    state.photos=[]
})
.addCase(getPhotos.pending,(state,action)=>{
    state.isLoading=false
    state.status='pending'
    state.photos=[]
})

    }
})
export default photosSlice.reducer