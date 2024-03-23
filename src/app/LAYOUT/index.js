import React, { Children } from 'react'
import { GENERALPAGECONTAINER } from '../pages/PHOTOS/styles'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function LAYOUT() {
  return (
    <GENERALPAGECONTAINER>
        <Header></Header>
    <Outlet/>
    </GENERALPAGECONTAINER>
  )
}
