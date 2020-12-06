import React, { createContext } from "react";

export const data = [];
export const valueContext = createContext({
  data,
  isFetching: false
});

const ContextProvider = () => {
  return <valueContext.Provider value="" />;
};

export default ContextProvider;
