import { CARTSUCCESS, CONSTDATA, FAILURE, LOADING, SUCCESS } from "./actionType";

const initValue = {
    isLoading: false,
    isError: false,
    data: [],
    constData:[],
    cartData:[]
  };
  

export const appReducer = (state=initValue, action) => {
    switch (action.type) {
      case LOADING:{
        return {
            ...state,
            isLoading:true
        }
      }

      case SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      }
     
      case CONSTDATA:{
        return {
            ...state,
            isLoading:false,
            data: action.payload,
            constData: action.payload
        }
      }

      case CARTSUCCESS:{
        return {
            ...state,
            isLoading:false,
            cartData: action.payload
        }
      }

      case FAILURE: {
        return {
          ...state,
          isError: true,
        };
      }
      default: {
       return state;
      }
    }
  };