import React, { useReducer } from "react";
import GlobalReducer from "./globalReducer";

interface Istate {
  cartItems: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }[];
  totalCost: number;
}

interface ICtxInitialData {
  state: Istate;
  reducerDispatch: React.Dispatch<any>;
}

export const GlobalCtx = React.createContext<ICtxInitialData>({
  state: {
    cartItems: [],
    totalCost: 0,
  },
  reducerDispatch: () => {},
});
const initialState = {
  cartItems: [],
  totalCost: 0,
};

const GlobalContext = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const reducerDispatch = (value: any) => {
    dispatch(value);
  };
  return (
    <GlobalCtx.Provider value={{ state, reducerDispatch }}>
      {children}
    </GlobalCtx.Provider>
  );
};

export default GlobalContext;
