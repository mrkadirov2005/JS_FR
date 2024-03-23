import React from 'react'
import { PhotosContainer,GENERALPAGECONTAINER } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setPhoto } from '../../../settings/reducers/photoSlice/photoSlice'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../../../settings/reducers/userSlice/userSlice'

export default function Photos() {


const dispatch=useDispatch()
const navigate=useNavigate()

  const PHOTOS=useSelector((state)=>state.photos.photos)
  const AUTHSTATUS=useSelector(state=>state.user.auth)
  const filteredArray=[]
PHOTOS.filter(item=>item.id<101?filteredArray.push(item):'')
console.log('filtered',filteredArray)

const getSinglePhoto=(e)=>{
  if(AUTHSTATUS){
    const ID=e.target.id
    const selectedPhoto=PHOTOS.filter(item=>item.id==ID)
    dispatch(setPhoto(selectedPhoto))
    navigate('/photo')
  }else{
    const userANSWER=prompt('unauthorized use, \n \tplease enter your name and email with slash between')


    if(userANSWER.includes('/'))
    {
      dispatch(authUser(userANSWER))
      navigate('/photo')
    }
    else
    {
      alert('you did not prove correct info')
      getSinglePhoto()
    }


  }
 
}

  return (
    <GENERALPAGECONTAINER>
    
      <ol>
        {filteredArray.map(item=>
        <li  key={item.id}  ><img width='150px' height='200px'  id={item.id} onClick={(e)=>getSinglePhoto(e)} src={item.url}/></li>
        )}
      </ol>
    </GENERALPAGECONTAINER>
  )
}
