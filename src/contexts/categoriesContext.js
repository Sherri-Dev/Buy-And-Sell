import { createContext, useReducer } from "react";
import categoriesReducer from "../reducers/categoriesReducer.js";

export const CategoriesContext = createContext();
export const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesReducer, {
    data: [],
    error: null,
  });

  return (
    <CategoriesContext.Provider
      value={{ catState: state, dispatchCat: dispatch }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
