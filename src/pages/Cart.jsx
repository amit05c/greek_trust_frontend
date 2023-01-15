import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import CartData from '../components/cart/CartData'
import styles from "../components/cart.module.css"
const Cart = () => {
  const {state,dispatch,totalqty}= useContext(AppContext)
  const [total,setTotal]= useState(0)
  // console.log(state)
  useEffect(()=>{
    let totalPrice= state?.cartData.reduce((pre,next)=>(pre+next.count*Number(next.price)),0) 
    setTotal(totalPrice)
  },[totalqty])
  return (
    <div>
      <div className={styles.cart}>
        <h3 style={{margin:"1rem"}}>{`Shopping cart `}</h3>
      </div>
     <CartData/>

     {state?.cartData?.length>0 &&  <div className={styles.total}>
      {`Total: ${total}`}
     </div>}
    
    </div>
  )
}

export default Cart