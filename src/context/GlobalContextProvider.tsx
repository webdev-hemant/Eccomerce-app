import React, { useState } from "react";

interface IContextType {
  cartCount: number;
}
interface IContextInitialType {
  data: IContextType;
  setCtxData: (value: IContextType) => void;
}

export const GlobalCtx = React.createContext<IContextInitialType>({
  data: { cartCount: 0 },
  setCtxData: () => {},
});

const GlobalContext = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<IContextType>({ cartCount: 0 });

  const setCtxData = (value: IContextType) => {
    setData(value);
  };

  return (
    <GlobalCtx.Provider value={{ data, setCtxData }}>
      {children}
    </GlobalCtx.Provider>
  );
};

export default GlobalContext;
