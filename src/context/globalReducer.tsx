const getTotalCost = (array: any[]) => {
  return array?.reduce((acc, curr) => {
    return acc + curr?.price;
  }, 0);
};

const GlobalReducer = (state: any, action: any): any => {
  const { newStateData } = action;

  try {
    switch (action.type) {
      // -------------------------------------------------------------------
      case "addToCart":
        const newAddedToCart = {
          ...state,
          totalCost: getTotalCost([...state?.cartItems, newStateData]) || 0,
          cartItems: [...state?.cartItems, newStateData],
        };
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
        return removedCartItemState;
      // -------------------------------------------------------------------
      case "emtyCart":
        const emtyCart = {
          ...state,
          totalCost: 0,
          cartItems: [],
        };
        return emtyCart;
      // -------------------------------------------------------------------
    }
  } catch (error) {
    console.log(error);
  }
};

export default GlobalReducer;
