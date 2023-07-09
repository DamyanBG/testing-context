import { createContext, useCallback, useContext, useLayoutEffect, useReducer, useRef, useState } from "react";

const initialCartState = []

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialCartState)

    return (
        <CartContext.Provider
                value={{
                    cart,
                    setCart
                }}
            >
                {children}
        </CartContext.Provider>
    )
}