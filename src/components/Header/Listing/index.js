import React from 'react'
import { BUTTON, LIST } from '../styles'
import {  useNavigate } from 'react-router-dom'

 const LIST_ROUTING=({text,type,link}) =>{




    const Button=<BUTTON>{text}</BUTTON>

    const list=<LIST onClick={()=>window.location.href=link}>{text}</LIST>
    
  return (
    type==="button"? Button:list
    
  )
}
export default LIST_ROUTING
