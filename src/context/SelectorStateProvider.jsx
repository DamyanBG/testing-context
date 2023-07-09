import { useState } from "react"
import { SelectorContext } from "./SelectorContext"

const SelectorStateProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    return (
        <SelectorContext.Provider value={{ products, setProducts, cart, setCart }}>
            {children}
        </SelectorContext.Provider>
    )
}

export default SelectorStateProvider