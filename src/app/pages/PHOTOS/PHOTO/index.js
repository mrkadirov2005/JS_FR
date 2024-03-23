import React from 'react'
import { GENERALPAGECONTAINER } from '../styles'
import { useSelector } from 'react-redux'

export default function PHOTO_PAGE() {
  const PHOTO=useSelector(state=>state.photo.photo[0])
  console.log(PHOTO)
  return (
    <GENERALPAGECONTAINER>
    Photo page
    </GENERALPAGECONTAINER>
  )
}
