import { createContext, useState } from "react";

const initialCartState = []
const initialProductsState = []

export const OneContext = createContext()

export const OneProvider = ({ children }) => {
    const [cart, setCart] = useState(initialCartState)
    const [products, setProducts] = useState(initialProductsState)

    return (
        <OneContext.Provider
            value={{
                cart,
                setCart,
                products,
                setProducts
            }}
        >
            {children}
        </OneContext.Provider>
    )
}