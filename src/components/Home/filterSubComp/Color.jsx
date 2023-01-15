import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
const Color = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const price= searchParams.getAll("price") || ""
  const gender= searchParams.getAll("gender") || ""
  const type= searchParams.getAll("type") || ""
const [color,setColor]= useState([])
const handleColor= (e)=>{
   let newCol=e.target.value
   let colorCopy= [...color]
   let index= colorCopy.indexOf(newCol)
   if(index==-1){
    colorCopy.push(newCol)
    setColor(colorCopy)
   }else{
    colorCopy.splice(index,1)
     setColor(colorCopy)
   }
   console.log(colorCopy)
}

useEffect(()=>{
    setSearchParams({
      color,
      price,
      type,
      gender
    })
},[color])
  return (
    <div style={{marginTop:"1rem"}}>
    <h2>color</h2>
    <div>
      <div>
      <input type="checkbox" value={"Red"} onChange={handleColor} />
       <label>Red</label>
      </div>

      <div>
      <input type="checkbox" value={"Black"}  onChange={handleColor}  />
       <label>Black</label>
      </div>

      <div>
      <input type="checkbox" value={"Green"} onChange={handleColor}  />
       <label>Green</label>
      </div>

    </div>
    </div>
  )
}

export default Color