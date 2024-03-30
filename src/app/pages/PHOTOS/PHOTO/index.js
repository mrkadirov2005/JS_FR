import React from 'react'
import { GENERALPAGECONTAINER } from '../styles'
import { useSelector } from 'react-redux'
import { DETAILS } from '../../USERS/USER'

export default function PHOTO_PAGE() {
  const PHOTO=useSelector(state=>state.photo.photo)
  console.log(PHOTO)
  const objectKeys=Object.keys(PHOTO)
  // objectKeys=['albumId',' 'id','title','url' ]
  return (
  <GENERALPAGECONTAINER>
   <DETAILS>
   {objectKeys[0]+ " " +PHOTO[objectKeys[0]]} <br/>
   {objectKeys[1]+ " " +PHOTO[objectKeys[1]]}<br/>
   {objectKeys[2]+ " " +PHOTO[objectKeys[2]]}<br/>
  <img width={'500px'} height={'500px'} src={PHOTO.url}/>
  </DETAILS>
  </GENERALPAGECONTAINER>
  )
}
