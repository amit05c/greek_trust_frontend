import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Filter from '../components/Home/Filter'
import styles from "../components/Home/home.module.css"
import Products from '../components/Home/Products'
const Home = () => {
    const {state,dispatch}= useContext(AppContext)
    console.log(state)
  return (
    <div>
       <Navbar/>
       <div className={styles.products}>
        <Filter/>
        <Products/>
       </div>
    </div>
  )
}

export default Home