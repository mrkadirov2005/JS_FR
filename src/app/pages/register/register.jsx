import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOn } from '../../../settings/reducers/Auth/AuthSlice'

export default function RegisterUser() {
  const dispatch=useDispatch()
  const Auth=useSelector(state=>state.auth)


  
  return  (<form>
      <h1>Please register with your details required below:</h1>

    <label htmlFor="name">FN</label>
    <input type="text" placeholder='First name'/>

    <label htmlFor="last_name">LN</label>
    <input type="text" placeholder='Last name' />

    <label htmlFor="password">PWD</label>
    <input type="password" placeholder='Password' />

    <button onClick={()=>dispatch(setOn())}>Submit</button>
    <span className='span'>{Auth.errorMS}</span>

</form>
  )
}
