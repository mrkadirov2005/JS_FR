import React from 'react'
import { PhotosContainer,GENERALPAGECONTAINER } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setPhoto } from '../../../settings/reducers/photoSlice/photoSlice'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setErrorMS, setOn, setSigned } from '../../../settings/reducers/Auth/AuthSlice'


const OL=styled.ol`
display: flex;
flex-wrap: wrap;
`
export default function Photos() {


const dispatch=useDispatch()
const navigate=useNavigate()

  const PHOTOS=useSelector((state)=>state.photos.photos)
  //get Auth from redux TK state
  const Auth=useSelector(state=>state.auth)

  const filteredArray=[]
PHOTOS.filter(item=>item.id<101?filteredArray.push(item):'')




//create a function for getting single photo
const getSinglePhoto=(e)=>{

  console.log('get single photo worked,',Auth.isSignedIn)
  //check if the id exists

  let ID=0;
 let  selectedPhoto=0;
 if( e.target.id){
  //equilize id to ID variable
    ID=e.target.id
  //filter photo with the  same id using filter method
   selectedPhoto=PHOTOS.filter(item=>item.id==ID)
  }
  
  //check if the user is signedIn and LoggedIn
  if( Auth.isLoggedIn && Auth.isSignedIn){
    console.log("dispatched")
    dispatch(setPhoto(selectedPhoto))
     navigate('/photo')

  }
  //check if the user is logged but not signed
  else if(Auth.isLoggedIn && !Auth.isSignedIn){
    console.log(" isSignedIn false")
     dispatch(setErrorMS("Please sign in!"))
     dispatch(setOn("Please sign in!"))
    }
 //check if the user is signed but not loggedIn
  else if(!Auth.isLoggedIn && Auth.isSignedIn){
    //set error message 
    dispatch(setErrorMS("Please log in!"))
    dispatch(setOn())
    
  }
  //check if no login and no signin
  else if(!Auth.isLoggedIn && Auth.isSignedIn){
    //set error message
    dispatch(setErrorMS("plase login first and sign in to continue!"))
    dispatch(setOn())
    
  }

  

}

  return (
    <GENERALPAGECONTAINER>
    
      <OL>
        {filteredArray.map(item=>
        <li  key={item.id}  ><img width='150px' height='200px'  id={item.id} onClick={(e)=>getSinglePhoto(e)} src={item.url}/></li>
        )}
      </OL>
    </GENERALPAGECONTAINER>
  )
}
