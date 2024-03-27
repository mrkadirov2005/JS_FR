import React from 'react'
import { GENERALPAGECONTAINER } from '../../PHOTOS/styles'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const DETAILS=styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height: 100vh;
background-color: green;
flex-direction: column;
`
export default function USER() {
  const clickedUser=useSelector(state=>state.user.user[0])
  console.log(clickedUser)
  return (
    <GENERALPAGECONTAINER>
<DETAILS>
{clickedUser.id+'  '} 
{clickedUser.name} <br/>
{clickedUser.email} <br/>
{clickedUser.username} <br/>
{clickedUser.phone} <br/>
{clickedUser.website} <br/>
</DETAILS>
{/* {clickedUser.address} */}

    </GENERALPAGECONTAINER>
  )
}
