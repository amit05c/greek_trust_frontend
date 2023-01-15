import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
const Gender = () => {
  const [gender,setGender]= useState([])
  const [searchParams,setSearchParams]= useSearchParams()
  const price= searchParams.getAll("price") || ""
  const color= searchParams.getAll("color") || ""
  const type= searchParams.getAll("type") || ""

  const handleGender= (e)=>{
    let newGen=e.target.value
    let genderCopy= [...gender]
    let index= genderCopy.indexOf(newGen)
    if(index==-1){
     genderCopy.push(newGen)
     setGender(genderCopy)
    }else{
      genderCopy.splice(index,1)
     setGender(genderCopy)
    }
    console.log(genderCopy)
  }

  useEffect(()=>{
    setSearchParams({
      gender,
      price,
      color,
      type
    })
  },[gender])
  return (
    <div style={{marginTop:"1rem"}}>
      <h3>Gender</h3>
      <div>
        <div>
          <input type="checkbox" value={"Men"} onChange={handleGender} />
          <label>Men</label>
        </div>

        <div>
          <input type="checkbox" value={"Women"} onChange={handleGender} />
          <label>Women</label>
        </div>
      </div>
    </div>
  );
};

export default Gender;
