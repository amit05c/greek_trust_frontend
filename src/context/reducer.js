import { FAILURE, LOADING, SUCCESS } from "./actionType";

const initValue = {
    isLoading: false,
    isError: false,
    data: [],
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