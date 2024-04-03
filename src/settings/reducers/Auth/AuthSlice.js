import { createSlice } from "@reduxjs/toolkit";

const initialState={
    //updated this part
    User:{
        firstname:"",
        lastname:"",
        password:"",
        errorMS:""

    },
    isSignedIn:false,
    isLoggedIn:false,
    status:'fulfilled' | 'rejected' | 'pending',
    on:true
}
export const AUTHslice=createSlice({
    name:'photo',
    initialState,
    reducers:{
        setSigned:(state)=>{
            state.isSignedIn=true
        },
        setIsloggedIn:(state)=>{
        state.isLoggedIn=true

        },
        setErrorMS:(state,action)=>{
            state.errorMS=action.payload
        },
        setOnRegister:(state)=>{
            state.on=true
        },
        setOffRegister:(state)=>{
            state.on=false
        },
        setUserDetails:(state,action)=>{
            const payload=action.payload
            state.User={...state.User,...payload}
        }
    },

})
export const {setIsloggedIn,setSigned,setErrorMS,setOnRegister,setOffRegister,setUserDetails}= AUTHslice.actions
export default AUTHslice.reducer