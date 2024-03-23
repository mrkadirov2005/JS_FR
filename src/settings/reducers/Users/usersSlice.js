import { createSlice } from "@reduxjs/toolkit"
import { getUsersList } from "./usersThunk/usersThunk"

export const initialState={
    usersInfo:[],
    status:'pending' | 'fulfilled' | 'rejected',
    isLoading:false,
}




 const usersSlice=createSlice({
    name:'usersSlice',
    initialState,
    reducers:{
        setInfo(state,action){
            state.usersInfo.push('my name is Muzaffar')
        }
    },
    extraReducers(builder){
        builder
        .addCase(getUsersList.fulfilled,(state,action)=>{
            state.usersInfo=action.payload
            state.status='fulfilled'
            state.isLoading=false
        })
        .addCase(getUsersList.pending,(state,action)=>{
            state.isLoading=true
            state.status='pending'
            state.usersInfo=[]
        })
        .addCase(getUsersList.rejected,(state,action)=>{
            state.isLoading=false
            state.status='rejected'
            state.usersInfo=[]
        })

    }
})
export const {setInfo}=usersSlice.actions
export default usersSlice.reducer
