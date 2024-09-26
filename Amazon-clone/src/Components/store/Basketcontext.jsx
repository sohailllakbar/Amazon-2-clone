import { createContext, useReducer } from "react";

const initialVal = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "add to basket":
      return [...state, action.payload];
    case "remove from basket":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketstate, dispatch] = useReducer(reducer, initialVal);
return(
<BasketContext.Provider value={{ basketstate, dispatch }}>
    {children}
  </BasketContext.Provider>
)
  
};

export { BasketProvider, BasketContext };
