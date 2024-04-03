import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMS, setOffRegister, setSigned, setUserDetails } from '../../../settings/reducers/Auth/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { Hash, } from '../../../settings/features/hash'
export default function RegisterUser() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const Auth=useSelector(state=>state.auth)
//create variable to store data 
//wrote details in order to double check
  const UserDetails={
    firstname:false,
    lastname:false,
    password:false
  }


  const submitRegister=()=>{
    if(UserDetails.firstname.length>4 && UserDetails.lastname.length>5 && UserDetails.password.length>4){
    
      // dispatch(setOffRegister())

      dispatch(setSigned())
      dispatch(setErrorMS(false))
      
      // UserDetails.password=hashedPWD
      dispatch(setUserDetails(UserDetails))
  alert('now, you can re_click on the item you want to  get!')

}
}
  
  return  (
    <>
  <form>
    <h1>Please register with your details required below:</h1>

    <label htmlFor="name">FN</label>
    <input type="text" onChange={(e)=>UserDetails.firstname=e.target.value} placeholder='First name'/>

    <label htmlFor="last_name">LN</label>
    <input type="text" onChange={(e)=>UserDetails.lastname=e.target.value}  placeholder='Last name' />

    <label htmlFor="password">PWD</label>
    <input type="password" onChange={(e)=>UserDetails.password=Hash(e.target.value)} placeholder='Password' />

    <span className='span'>{Auth.errorMS}</span>

</form>
    <button onClick={()=>submitRegister()}>Submit</button>
    </>
  )
}
