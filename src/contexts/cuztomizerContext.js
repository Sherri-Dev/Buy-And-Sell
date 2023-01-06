import { createContext, useReducer } from "react";
import customizerReducer from "../reducers/customizerReducer";



export const CustomizerContext = createContext();

export const CustomizerContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(customizerReducer, { customizer: {}, error: null })

    return (
        <CustomizerContext.Provider
            value={{ customizerState: state, dispatchCustomizer: dispatch }}
        >
            {children}
        </CustomizerContext.Provider>
    );
};