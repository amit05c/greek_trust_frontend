import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div>
        <h2>TeeRex Store</h2>
    </div>
    <div className={styles.navbar_sub_div}>
        <div>Products</div>
        <div>CART</div>
    </div>
</div>
  )
}

export default Navbar