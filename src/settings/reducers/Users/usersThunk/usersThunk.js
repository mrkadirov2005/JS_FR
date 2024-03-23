import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, endpoints } from "../../../endpoints/endpoints";

export const getUsersList=createAsyncThunk('get/users',async()=>{
    const response=await axios.get(BASE_URL+endpoints.users)
    return response.data
})