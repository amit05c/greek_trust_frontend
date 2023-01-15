import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Product.module.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { CARTSUCCESS, SUCCESS } from "../../context/actionType";
import { Alldata, ColorFilter, Color_Gender, Color_Type, Gender_Filter, Gender_Type, Price, Price_Col, Price_Col_Gen, Price_Col_Type, Price_Gender, Price_Type, Price_Type_Gender, SearchResults, Type_Filter, allFilter, gender_col_type } from "./FilterLogic/AllFilter";
import SearchBox from "./SearchBox";
const Products = () => {
  const { state, dispatch,search } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(state)
 
  useEffect(() => {

    const price = searchParams.getAll("price") || "";
    const color = searchParams.getAll("color") || "";
    const type = searchParams.getAll("type") || "";
    const gender = searchParams.getAll("gender") || "";
     console.log(price,color,gender,type)
     if(search){
      let output= SearchResults(state,search)
     return dispatch({ type: SUCCESS, payload: output });
    }
    if (
      price.length > 0 &&
      color.length > 0 &&
      gender.length > 0 &&
      type.length > 0
    ) {
      let output = state&&allFilter(state, price, color, gender, type);
      dispatch({ type: SUCCESS, payload: output });
    } else if (price.length > 0 && color.length > 0 && gender.length > 0) {
      // pcg
      let output = state&&Price_Col_Gen(state, price, color, gender);
      dispatch({ type: SUCCESS, payload: output });
    } else if (price.length > 0 && color.length > 0 && type.length > 0) {
      // pct
      let output= state&&Price_Col_Type(state, price, color, type)
      dispatch({ type: SUCCESS, payload: output });
    }else if( color.length > 0 &&
      gender.length > 0 &&
      type.length > 0){
      // gtc
      console.log("ghosh")
      let output= state&&gender_col_type(state,gender,color,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length > 0 && type.length > 0 && gender.length > 0){
      // ptg
      let output= state&&Price_Type_Gender(state,price,type,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && color.length>0){
      // pc
      // Price_Col
      let output= state&&Price_Col(state,price,color)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && gender.length>0){
      // pg
      let output= state&&Price_Gender(state,price,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0 && type.length>0){
      // pt
      let output= state&&Price_Type(state,price,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0 && gender.length>0){
      //cg
      let output= state&&Color_Gender(state,color,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0 && type.length>0 ){
      // ct
      let output= state&&Color_Type(state,color,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(gender.length>0 && type.length>0){
      let output= state&&Gender_Type(state,gender,type)
      dispatch({ type: SUCCESS, payload: output });
    }else if(price.length>0){
      // price only
      let output= state&&Price(state,price)
      dispatch({ type: SUCCESS, payload: output });
    }else if(color.length>0){
      // color only
      let output= state&&ColorFilter(state,color)
      dispatch({ type: SUCCESS, payload: output });
    }else if(gender.length>0){
      // gender only
      let output= state&&Gender_Filter(state,gender)
      dispatch({ type: SUCCESS, payload: output });
    }else if(type.length>0){
      let output= state&&Type_Filter(state,type)
      dispatch({ type: SUCCESS, payload: output });
    }else{
      let output= Alldata(state)
      dispatch({ type: SUCCESS, payload: output });
    }
   
  }, [location.search,search]);

  const handleCart=(item)=>{
       
       let output=  state?.cartData?.find(el=>Number(el.id)==Number(item.id))
       if(output){
         if(output.count *1 <item.quantity*1){
          // console.log('amit')
          console.log(output)
          let newCount= output.count+1
          console.log(newCount)
          let filterdata= state?.cartData.filter(el=>Number(el.id)!==Number(item.id))
          let updateItem= {...output,count:newCount}
          let updatedCart=[...filterdata,updateItem]
          dispatch({type:CARTSUCCESS,payload:updatedCart})
        }else{
          alert(`This product is not availabe this much quantity`)
        }
       }else{
        console.log("ghosh")
         let newItem= {...item,count:1}
         let updatedCart=[...state.cartData,newItem]

         dispatch({type:CARTSUCCESS,payload:updatedCart})
       }
       
       
  }
  return (
    <div style={{width:"100%"}}>
    <SearchBox/>
    <div className={styles.allProd}>

      {state?.data?.map((el) => (
        <div key={el.id}>
          <div>
            <img src={el.imageURL} alt="" width="100px" />
          </div>
          <div>
            <h3>{`Rs ${el.price}`}</h3>
            <p>{`Type: ${el.type}`}</p>
            <button onClick={()=>handleCart(el)} style={{padding:"0.5rem"}}>Addto cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
