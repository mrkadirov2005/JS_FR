import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASIC_URL } from "../../Variables"
import axios from "axios"
import { booklist } from "../selector/selectors"

export const plots={
    full:'Full',
    short:'Short'
}
// t=title




export const getMovieByTitle=createAsyncThunk('get/MovieLlist',async (title)=>{
    const response=await axios.get(`${BASIC_URL}t=${title}`)
    return response.data
}
)

export const getMovieListWithYear=createAsyncThunk('get/Movielist_year',async (title,year)=>{
    const response=await axios.get(`${BASIC_URL}t=${title}&y=${year}`)
    return response.data
})

export const getMovieListWithPlot=createAsyncThunk('get/Movielist_plot',async (title,plot)=>{
    const response=await axios.get(`${BASIC_URL}t=${title}&plot=${plot}`)
    return response.data
})

