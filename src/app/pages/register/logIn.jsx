import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMS, setIsloggedIn, setOffRegister, setSigned } from '../../../settings/reducers/Auth/AuthSlice'
import { Decode } from '../../../settings/features/hash'

export default function LogIn() {
  const dispatch=useDispatch()
  const AuthR=useSelector(state=>state.auth)
  const Auth=useSelector(state=>state.auth.User)
const UserDetails={
  firstname:false,
  password:false,
}

const submitLogin=()=>{
  //check name and password with redux state
  if(Auth.firstname===UserDetails.firstname){
if(Decode(Auth.password)===UserDetails.password){
  dispatch(setIsloggedIn())
  dispatch(setOffRegister())
  alert('you have successfully logged in!')
}else{
  dispatch(setErrorMS("incorrect password"))
  alert(AuthR.errorMS)
}
  } else {
    dispatch(setErrorMS("incorrect name used"))
    alert(AuthR.errorMS)
  }
}
  return (
    <>
    <form>
      <h1>Please LogIn with your details required below:</h1>
        <label htmlFor="name">FN</label>
        <input onChange={(e)=>UserDetails.firstname=e.target.value} type="text" placeholder='First name'/>

        <label htmlFor="password">PWD</label>
        <input onChange={(e)=>UserDetails.password=e.target.value} type="password" placeholder='Password' />

        <span className='span'>{Auth.errorMS}</span>
    </form>
        <button onClick={()=>submitLogin()}>Submit</button>
        </>
    // form ichiga oralgan 3 ta input 1.name, 2,lastname,3 password, b4. submit button
  )
}
