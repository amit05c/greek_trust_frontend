import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
const Type = () => {
const [type,setType]= useState([])
const [searchParams,setSearchParams]= useSearchParams()
const price= searchParams.getAll("price") || ""
const color= searchParams.getAll("color") || ""
const gender= searchParams.getAll("gender") || ""
  const handleType= (e)=>{
    let newType=e.target.value
    let typeCopy= [...type]
    let index= typeCopy.indexOf(newType)
    if(index==-1){
     typeCopy.push(newType)
     setType(typeCopy)
    }else{
      typeCopy.splice(index,1)
     setType(typeCopy)
    }
    // console.log(typeCopy)
  }

  useEffect(()=>{
    setSearchParams({
      type,
      price,
      color,
      gender
    })
  },[type])
  return (
    <div style={{marginTop:"1rem"}}>
    <h2>Type</h2>
    <div>
      <div>
      <input type="checkbox" value={"Polo"} onChange={handleType} />
       <label>Polo</label>
      </div>

      <div>
      <input type="checkbox" value={"Hoodie"} onChange={handleType} />
       <label>Hoodie</label>
      </div>

      <div>
      <input type="checkbox" value={"Basic"} onChange={handleType} />
       <label>Basic</label>
      </div>

    </div>
    </div>
  )
}

export default Type