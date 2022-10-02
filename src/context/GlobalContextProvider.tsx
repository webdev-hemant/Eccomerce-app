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
  totalCost: number;
}

interface ICtxInitialData {
  state: Istate;
  reducerDispatch: React.Dispatch<any>;
}

export const GlobalCtx = React.createContext<ICtxInitialData>({
  state: {
    cartItems:
      JSON.parse(localStorage.getItem("cartData") || "")?.cartItems || [],
    totalCost: JSON.parse(localStorage.getItem("cartData") || "")?.totalCost,
  },
  reducerDispatch: () => {},
});
const initialState = {
  cartItems:
    JSON.parse(localStorage.getItem("cartData") || "")?.cartItems || [],
  totalCost: JSON.parse(localStorage.getItem("cartData") || "")?.totalCost,
};
const cartReducer = (state: any, action: any): any => {
  const { newStateData } = action;

  const getTotalCost = (array: any[]) => {
    return array?.reduce((acc, curr) => {
      return acc + curr?.price;
    }, 0);
  };

  try {
    switch (action.type) {
      // -------------------------------------------------------------------
      case "addToCart":
        const newAddedToCart = {
          ...state,
          totalCost: getTotalCost([...state?.cartItems, newStateData]) || 0,
          cartItems: [...state?.cartItems, newStateData],
        };
        localStorage.setItem("cartData", JSON.stringify(newAddedToCart));
        return newAddedToCart;
      // -------------------------------------------------------------------
      case "removeFromCart":
        const removedItemArray = state.cartItems.filter(
          (item: any) => item.id !== newStateData.id
        );
        const removedCartItemState = {
          ...state,
          totalCost: getTotalCost(removedItemArray),
          cartItems: removedItemArray,
        };
        localStorage.setItem("cartData", JSON.stringify(removedCartItemState));
        return removedCartItemState;
      // -------------------------------------------------------------------
      case "emtyCart":
        const emtyCart = {
          ...state,
          totalCost: 0,
          cartItems: [],
        };
        localStorage.setItem("cartData", JSON.stringify(emtyCart));
        return emtyCart;
      // -------------------------------------------------------------------
    }
  } catch (error) {
    console.log(error);
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
