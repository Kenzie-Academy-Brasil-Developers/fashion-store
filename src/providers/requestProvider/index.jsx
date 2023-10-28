// import { createContext, useContext, useEffect, useState } from "react";
// import { api } from "../../services/api";

// export const requestsContext = createContext({})
// export const useRequestContext = useContext(requestsContext)

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

//     return(
//         <requestsContext.Provider value={{listProduct}}>
//             {children}
//         </requestsContext.Provider>
//     )
// }
