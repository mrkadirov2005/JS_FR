import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, endpoints } from "../../../endpoints/endpoints";

export const getPostsList=createAsyncThunk('get/postsList',async()=>{
    const response=axios.get(`${BASE_URL}${endpoints.posts}`)
    return (await response).data


})
