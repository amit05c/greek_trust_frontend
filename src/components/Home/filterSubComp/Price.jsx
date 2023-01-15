import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
const Price = () => {
  const [priceRange,setPriceRange]= useState([])
  const [searchParams,setSearchParams]= useSearchParams()
  const color= searchParams.getAll("color") || ""
  const gender= searchParams.getAll("gender") || "" 
  const type= searchParams.getAll("type") || "" 
  const handlePrice= (e)=>{
  let newPrice=e.target.value.split("-").map(Number)
      setPriceRange(newPrice)
  }

  useEffect(()=>{
    setSearchParams({
      price:priceRange,
      color,
      gender,
      type
    })
  },[priceRange])

  return (
    <div style={{marginTop:"1rem"}}>
    <h2>Price</h2>
    <div>
      <div>
      <input type="radio" name="price" value={"0-250"} onChange={handlePrice} />
       <label>0-250</label>
      </div>

      <div>
      <input type="radio" name="price" value={"251-450"} onChange={handlePrice} />
       <label>251-450</label>
      </div>

      <div>
      <input type="radio" name="price" value={"450-2000"} onChange={handlePrice} />
       <label>Rs  450</label>
      </div>

    </div>
    </div>
  )
}

export default Price