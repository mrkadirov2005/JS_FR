import React from 'react'
import { GENERALPAGECONTAINER } from '../PHOTOS/styles'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setUser } from '../../../settings/reducers/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
export default function USERS() {
  const dispatch=useDispatch()
  const USERS=useSelector(state=>state.users)
  const navigate=useNavigate()
  console.log(USERS)

  const OL=styled.ol`
  display: flex;
  flex-wrap: wrap;
  `
  const USERCONTAINER=styled.li`
  background-color: green;
  border: 2px solid gray;
  margin: 10px;
  width:250px;
  `



  
const getSingleElement=(e)=>{
const ID=e.target.id
const pickedUser=USERS.usersInfo.filter(item=>item.id==ID)
dispatch(setUser(pickedUser))
navigate('/user')
}

  return (
    <GENERALPAGECONTAINER>
    <OL>
   {USERS.usersInfo.map(item=><USERCONTAINER id={item.id} onClick={(e)=>getSingleElement(e)} key={item.id}>
  
   {item.name} <br/>
   {item.email} <br/>
   {item.website} <br/>

   </USERCONTAINER>)}
   </OL>
    </GENERALPAGECONTAINER>
  )
}
