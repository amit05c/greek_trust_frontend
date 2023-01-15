import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Product.module.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { SUCCESS } from "../../context/actionType";
import { Alldata, ColorFilter, Color_Gender, Color_Type, Gender_Filter, Gender_Type, Price, Price_Col, Price_Col_Gen, Price_Col_Type, Price_Gender, Price_Type, Price_Type_Gender, Type_Filter, allFilter, gender_col_type } from "./FilterLogic/AllFilter";
const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(state)
  useEffect(() => {
    const price = searchParams.getAll("price") || "";
    const color = searchParams.getAll("color") || "";
    const type = searchParams.getAll("type") || "";
    const gender = searchParams.getAll("gender") || "";
     console.log(price,color,gender,type)
    if (
      price.length > 0 &&
      color.length > 0 &&
      gender.length > 0 &&
      type.length > 0
    ) {
      let output = allFilter(state, price, color, gender, type);
      dispatch({ type: SUCCESS, payload: output });
    } else if (price.length > 0 && color.length > 0 && gender.length > 0) {
      // pcg
      let output = Price_Col_Gen(state, price, color, gender);
      dispatch({ type: SUCCESS, payload: output });
    } else if (price.length > 0 && color.length > 0 && type.length > 0) {
      // pct
      let output= Price_Col_Type(state, price, color, type)
      dispatch({ type: SUCCESS, payload: output });
    }else if( color.length > 0 &&
      gender.length > 0 &&
      type.length > 0){
      // gtc
      console.log("ghosh")
      let output= gender_col_type(state,gender,color,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length > 0 && type.length > 0 && gender.length > 0){
      // ptg
      let output= Price_Type_Gender(state,price,type,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && color.length>0){
      // pc
      // Price_Col
      let output= Price_Col(state,price,color)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && gender.length>0){
      // pg
      let output= Price_Gender(state,price,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && type.length>0){
      // pt
      let output= Price_Type(state,price,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0 && gender.length>0){
      //cg
      let output= Color_Gender(state,color,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0 && type.length>0 ){
      // ct
      let output= Color_Type(state,color,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(gender.length>0 && type.length>0){
      let output= Gender_Type(state,gender,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0){
      // price only
      let output= Price(state,price)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0){
      // color only
      let output= ColorFilter(state,color)
      dispatch({ type: SUCCESS, payload: output });
    }else if(gender.length>0){
      // gender only
      let output= Gender_Filter(state,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(type.length>0){
      let output= Type_Filter(state,type)
      dispatch({ type: SUCCESS, payload: output });
    }else{
      let output= Alldata(state)
      dispatch({ type: SUCCESS, payload: output });
    }
  }, [location]);
  return (
    <div className={styles.allProd}>
      {state?.data?.map((el) => (
        <div key={el.id}>
          <div>
            <img src={el.imageURL} alt="" width="100px" />
          </div>
          <div>
            <h3>{`Rs ${el.price}`}</h3>
            <button>Addto cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
