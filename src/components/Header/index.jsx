import React from 'react'
import { HeaderContainer, LOGO, NAVBAR } from './styles'
import LIST_ROUTING from './Listing'
import { useDispatch } from 'react-redux'
import { setOffRegister } from '../../settings/reducers/Auth/AuthSlice'

export default function Header() {
    const dispatch=useDispatch()
  return (
    <HeaderContainer>
        <LOGO>Muzaffar Blog</LOGO>
        <NAVBAR>
            <LIST_ROUTING link="home" text="home" type="text"/>
            <LIST_ROUTING link="posts" text="posts" type="text"/>
            <LIST_ROUTING link="users" text="users" type="text"/>
            <LIST_ROUTING link="photos" text="photos" type="text"/>
            <LIST_ROUTING link="0" text="0" type="button"/>
            <button onClick={()=>
            {              
            dispatch(setOffRegister());
            localStorage.clear()
            }
            }>📴</button>

        </NAVBAR>
    </HeaderContainer>
  )
}
