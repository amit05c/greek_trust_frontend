import React, { createContext, useEffect, useReducer } from "react";
import { FAILURE, LOADING, SUCCESS } from "./actionType";
import { appReducer } from "./reducer";

export const AppContext = createContext();

 

// const initValue = {
//   isLoading: false,
//   isError: false,
//   data: [],
// };

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer);
  const getData = () => {
    dispatch({type:LOADING})
     fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
      .then((res) => res.json())
      .then((res) => dispatch({type:SUCCESS,payload:res}))
      .catch(err=> dispatch({type:FAILURE}))
  };

  useEffect(() => {
    getData()
  },[]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
