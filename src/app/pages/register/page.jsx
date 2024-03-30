import React from 'react'
import LogIn from './logIn'
import Register from './register'
import { useSelector } from 'react-redux'
export default function RegisterPage() {
const Auth= useSelector(state=>state.auth)
return Auth.isLoggedIn && !Auth.isSignedIn?<Register/>:(!Auth.isLoggedIn && Auth.isSignedIn)?<LogIn/>:(!Auth.isLoggedIn && !Auth.isSignedIn)?<Register/>:"further condition"
}
