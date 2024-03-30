import React from 'react'
import { useSelector } from 'react-redux'
import { setIsloggedIn, setSigned } from '../../../settings/reducers/Auth/AuthSlice'

export default function LogIn() {
  const Auth=useSelector(state=>state.auth)

  return (
    <form>
      <h1>Please LogIn with your details required below:</h1>
        <label htmlFor="name">FN</label>
        <input type="text" placeholder='First name'/>

        <label htmlFor="password">PWD</label>
        <input type="password" placeholder='Password' />

        <button>Submit</button>
        <span className='span'>{Auth.errorMS}</span>
    </form>
    // form ichiga oralgan 3 ta input 1.name, 2,lastname,3 password, b4. submit button
  )
}
