import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL,endpoints } from "../../../endpoints/endpoints";
export const getPhotoById=createAsyncThunk('get/photo',async (photoId)=>{
    const response=await axios.get(`${BASE_URL}${endpoints.photos}/${photoId}`)
    return response.data
})