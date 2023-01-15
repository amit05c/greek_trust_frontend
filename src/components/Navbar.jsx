import React, { useContext, useEffect } from 'react'
import styles from "./Navbar.module.css"
import { AppContext } from '../context/AppContext'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const {state,dispatch,totalqty,setqty}= useContext(AppContext)
  useEffect(()=>{
    let totalQuantity= state?.cartData.reduce((pre,next)=>(pre+next.count),0) 
    setqty(totalQuantity)
  },[state?.cartData])
  return (
    <div className={styles.navbar}>
    <div>
        <h2>TeeRex Store</h2>
    </div>
    <div className={styles.navbar_sub_div}>
        <div>Products</div>
        <NavLink to="/cart"> <div>{`Cart ${totalqty}`}</div></NavLink>
    </div>
</div>
  )
}

export default Navbar