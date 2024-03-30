import { createSlice } from "@reduxjs/toolkit";

const initialState={
    User:{
        firstname:"",
        lastname:"",
        password:"",
        errorMS:""

    },
    isSignedIn:false,
    isLoggedIn:true,
    status:'fulfilled' | 'rejected' | 'pending',
    on:false
}
export const AUTHslice=createSlice({
    name:'photo',
    initialState,
    reducers:{
        setSigned:(state,action)=>{
            state.isSignedIn=true
        },
        setIsloggedIn:(state,action)=>{
        state.isLoggedIn=true

        },
        setErrorMS:(state,action)=>{
            state.errorMS=action.payload
        },
        setOn:(state,action)=>{
            state.on=!state.on
        }
    },

})
export const {setIsloggedIn,setSigned,setErrorMS,setOn}= AUTHslice.actions
export default AUTHslice.reducer