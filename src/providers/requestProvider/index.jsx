import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const requestsContext = createContext({})
export const useRequestContext = useContext(requestsContext)

<<<<<<< HEAD
// export const RequestProvider = ({children}) => {
//     const [listProduct, setListProduct] = useState([])

//     useEffect(async () => {
//         try {
//             const { data } = await api.get("/products")
//             setListProduct(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }, [])
=======
export const RequestProvider = ({children}) => {
    const [listProduct, setListProduct] = useState([])
    
    useEffect(async () => {
        try {
            const { data } = await api.get("/products")
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }, [])
>>>>>>> 9199b9545304c18b3b2c31086effd5c5257deff5

    return(
        <requestsContext.Provider value={{listProduct}}>
            {children}
        </requestsContext.Provider>
    )
}
