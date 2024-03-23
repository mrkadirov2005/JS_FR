import React from 'react'
import { PhotosContainer,GENERALPAGECONTAINER } from './styles'
import { useSelector } from 'react-redux'

export default function Photos() {
  const PHOTOS=useSelector((state)=>state.photos.photos)
  const filteredArray=[]
PHOTOS.filter(item=>item.id<101?filteredArray.push(item):'')
console.log('filtered',filteredArray)

  return (
    <GENERALPAGECONTAINER>
      <ol>
        {filteredArray.map(item=><li><img width='15px' height='20px' src={item.url}/></li>)}
      </ol>
    </GENERALPAGECONTAINER>
  )
}
