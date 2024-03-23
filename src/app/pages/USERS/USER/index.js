import React from 'react'
import { GENERALPAGECONTAINER } from '../../PHOTOS/styles'
import { useSelector } from 'react-redux'

export default function USER() {
  const clickedUser=useSelector(state=>state.user.user[0])
  console.log(clickedUser)
  return (
    <GENERALPAGECONTAINER>
{clickedUser.name}
    </GENERALPAGECONTAINER>
  )
}
