import React, { createContext, useEffect, useReducer, useState } from "react";
import { CONSTDATA, FAILURE, LOADING, SUCCESS } from "./actionType";
import { appReducer } from "./reducer";

export const AppContext = createContext();

 


export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer);
  const [totalqty,setqty]= useState(0)
  const [search,setSearch]= useState("")
  const getData = () => {
    dispatch({type:LOADING})
     fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
      .then((res) => res.json())
      .then((res) => dispatch({type:CONSTDATA,payload:res}))
      .catch(err=> dispatch({type:FAILURE}))
  };

  useEffect(() => {
    getData()
  },[]);

  return (
    <AppContext.Provider value={{ state, dispatch,search,setSearch,totalqty,setqty }}>
      {children}
    </AppContext.Provider>
  );
};
