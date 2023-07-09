import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../fetchProducts";

const initialProductsState = []

export const ProductContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProductsState)

    // const loadProducts = async () => {
    //     const loadedProducts = await fetchProducts()
    //     setProducts(loadedProducts)
    // } 

    // useEffect(() => {
    //     loadProducts()
    // }, [])

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}