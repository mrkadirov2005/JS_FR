import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, endpoints } from "../../../endpoints/endpoints";

export const getUserById=createAsyncThunk('get/user',async (userId)=>{
    const response=await axios.get(`${BASE_URL}${endpoints.users}/${userId}`)
    return response.data
})