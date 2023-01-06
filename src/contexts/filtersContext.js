import { createContext, useReducer } from "react";
import filterReducer from "../reducers/fiterReducer";


export const FiltersContext = createContext();

export const FiltersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, { filteredCtgs: [], searchText: "", searchLoc: "", priceRange: [0, 10000], warranty: "", condition: "" })

  return (
    <FiltersContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
