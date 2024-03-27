import React from 'react'
import { GENERALPAGECONTAINER } from '../styles'
import { useSelector } from 'react-redux'
import { DETAILS } from '../../USERS/USER'

export default function POST() {
  const PHOTO=useSelector(state=>state.post.post)
  console.log(PHOTO)
  const objectKeys=Object.keys(PHOTO)
  // objectKeys=['albumId',' 'id','title','url' ]
  return (
    <GENERALPAGECONTAINER>
   <DETAILS>
   {objectKeys[0]+ ": " +PHOTO[objectKeys[0]]} <br/>
   {objectKeys[1]+ ": " +PHOTO[objectKeys[1]]}<br/>
   {objectKeys[2]+ ": " +PHOTO[objectKeys[2]]}<br/>
   {objectKeys[3]+ ": " +PHOTO[objectKeys[3]]}<br/>
 
  

   </DETAILS>
    </GENERALPAGECONTAINER>
  )
}
