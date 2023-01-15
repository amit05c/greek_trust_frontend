import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const SearchBox = () => {
    const {search,setSearch}= useContext(AppContext)
    
  return (
    <div style={{width:"70%",margin:"auto"}}>
        <input style={{width:"70%",marginBottom:"1rem",padding:"0.5rem"}} type={"text"}placeholder='search here...' onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBox