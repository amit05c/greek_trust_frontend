import React from 'react'
import styles from "./filter.module.css"
import Color from './filterSubComp/Color'
import Gender from './filterSubComp/Gender'
import Price from './filterSubComp/Price'
import Type from './filterSubComp/Type'
const Filter = () => {
  return (
    <div className={styles.filter}>

     <Color/>
     <Gender/>
     <Price/>
     <Type/>
    </div>
  )
}

export default Filter