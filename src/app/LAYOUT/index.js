import React, { Children } from 'react'
import { GENERALPAGECONTAINER } from '../pages/PHOTOS/styles'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import RegisterPage from '../pages/register/page'

export default function LAYOUT() {
  const Auth=useSelector(state=>state.auth)

  return  Auth.on?<RegisterPage/>
  :<GENERALPAGECONTAINER>  
  <Header></Header>
  <Outlet/>
  </GENERALPAGECONTAINER>
       
}
