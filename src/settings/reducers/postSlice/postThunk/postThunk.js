import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL,endpoints} from "../../../endpoints/endpoints";

export const getPostById=createAsyncThunk('get/user',async (postId)=>{
    const response=await axios.get(`${BASE_URL}${endpoints.posts}/${postId}`)
    return response.data
})