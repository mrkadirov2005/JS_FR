import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./userThunks/userThunk";

const initialState={
    user:[],
    isLoading:false,
    status:'fulfilled' | 'rejected' | 'pending'
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    },
    extraReducers(builder){
builder
.addCase(getUserById.fulfilled,(state,action)=>{
    state.isLoading=false
    state.status='fulfilled'
    state.user=action.payload
})
    }
})
export const {setUser}=userSlice.actions
export default userSlice.reducer