import React, { useReducer } from "react";

interface ICtxInitialData {
  state: {
    cartItems: any[];
  };
  reducerDispatch: React.Dispatch<any>;
}

export const GlobalCtx = React.createContext<ICtxInitialData>({
  state: {
    cartItems: [],
  },
  reducerDispatch: () => {},
});
const initialState = {
  cartItems: [],
};
const cartReducer = (state: any, action: any): any => {
  const { newStateData } = action;
  switch (action.type) {
    case "addToCart":
      const newState = {
        ...state,
        cartItems: [...state.cartItems, newStateData],
      };
      // state.cartItems.push(newStateData);
      // const filteredState = state.cartItems.filter(item => )
      // console.log(state);
      return newState;
  }
};
const GlobalContext = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
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
