import { createContext, useContext } from "react";

export const requestsContext = createContext({})
export const useRequestContext = useContext(requestsContext)

export const RequestProvider = ({children}) => {
    return(
        <requestsContext.Provider value={{}}>
            {children}
        </requestsContext.Provider>
    )
}
