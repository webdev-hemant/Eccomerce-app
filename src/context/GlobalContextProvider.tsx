import React, { useReducer } from "react";

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
}

interface ICtxInitialData {
  state: Istate;
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
      const newAddedToCart = {
        ...state,
        cartItems: [...state.cartItems, newStateData],
      };
      localStorage.setItem(
        "cartData",
        JSON.stringify(newAddedToCart.cartItems)
      );
      return newAddedToCart;
    case "removeFromCart":
      const removerFromCart = state.cartItems.filter(
        (item: any) => item.id !== newStateData.id
      );
      localStorage.setItem("cartData", JSON.stringify(removerFromCart));
      return {
        ...state,
        cartItems: removerFromCart,
      };
    case "emtyCart":
      localStorage.setItem("cartData", JSON.stringify([]));
      return {
        cartitems: [],
      };
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
