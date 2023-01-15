import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../cart.module.css";
import { CARTSUCCESS } from "../../context/actionType";
const CartData = () => {
  const { state, dispatch ,totalqty,setqty} = useContext(AppContext);

  const handleDelete = (id) => {
    let cartupdate = state.cartData.filter(
      (el) => Number(el.id) !== Number(id)
    );
    console.log(cartupdate);
    dispatch({ type: CARTSUCCESS, payload: cartupdate });
  };

  const handleCart = (item, type) => {
    console.log(item, type);
    let output = state?.cartData?.find(
      (el) => Number(el.id) == Number(item.id)
    );
    if (output) {
      // if (output.count * 1 < item.quantity * 1) {
        //    console.log(output)
        let newCount;
        if (type == "inc" && output.count * 1 < item.quantity * 1) {
          newCount = output.count + 1;
          setqty(totalqty+1)
        }

        if(type == "inc" && output.count * 1 >= item.quantity * 1){
          return alert(`This product is not availabe this much quantity`);
        }
        
         if (type == "dec") {
          newCount = output.count - 1;
          setqty(totalqty-1)
        }
        //    console.log(newCount)
        let filterdata = state?.cartData.filter(
          (el) => Number(el.id) !== Number(item.id)
        );
        let updateItem = { ...output, count: newCount };
        let updatedCart = [...filterdata, updateItem];
        dispatch({ type: CARTSUCCESS, payload: updatedCart });
      
      //  else {
      //   alert(`This product is not availabe this much quantity`);
      // }

    }
  };
  return (
    <div className={styles.cartData}>
      {state?.cartData?.length == 0 && (
        <div>
          <h2>Cart Empty...</h2>
        </div>
      )}

      {state?.cartData?.map((el) => (
        <div key={el.id} className={styles.card}>
          <div className={styles.imgbox}>
            <img src={el.imageURL} alt="" width="100px" />
            <h3>{el.name}</h3>
          </div>

          <div className={styles.delete}>
            <div>
              <button onClick={() => handleCart(el, "inc")} style={{padding:"0.5rem"}}>+</button>
              {`Qty: ${el.count}`}
              <button disabled={el.count==1} onClick={() => handleCart(el, "dec")} style={{padding:"0.5rem"}}>-</button>
            </div>
            <div>

            <button onClick={() => handleDelete(el.id)} style={{padding:"0.5rem"}}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartData;
