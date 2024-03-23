import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, endpoints } from "../../../endpoints/endpoints";
export const getPhotos=createAsyncThunk('get/photos',async ()=>{
    // const response=await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    const response=await axios.get(`${BASE_URL}${endpoints.photos}`)
    return response.data
})