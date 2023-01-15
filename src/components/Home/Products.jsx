import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from "./Product.module.css"
import {useSearchParams,useLocation} from "react-router-dom"
import { SUCCESS } from '../../context/actionType'
const Products = () => {
  const {state,dispatch}= useContext(AppContext)
  const [searchParams]= useSearchParams()
  const location = useLocation();
  // console.log(state)
  useEffect(()=>{
    const price= searchParams.getAll("price") || ""
    const color= searchParams.getAll("color")  || ""
    const type= searchParams.getAll("type") || ""
    const gender= searchParams.getAll("gender")  || ""
     console.log(price,color,gender,type)
    if(price.length>0 && color.length>0 && gender.length>0 && type.length>0){
      let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))
      // console.log(filterPrice)
      let filterColor;
       color?.forEach(el=>{let x=filterPrice.filter(item=>item.color==el)
          filterColor=[...x]
      })
      //  console.log(filterColor)
      let filterGender;
      gender?.forEach(el=>{let x=filterColor.filter(item=>item.gender==el)
        filterGender=[...x]
    })
       dispatch({type: SUCCESS,payload: filterGender})
    }
    
    // else if(price.length>0 && color.length>0){
    //   console.log("gh")
    // }
  },[location])
  return (
    <div className={styles.allProd}>
   {state?.data?.map(el=>(
    <div key={el.id}>
      <div>
      <img src={el.imageURL} alt="" width='100px'/>

      </div>
      <div>
        <h3>{`Rs ${el.price}`}</h3>
        <button>Addto cart</button>
      </div>
    </div>
   ))}
    </div>
  )
}

export default Products