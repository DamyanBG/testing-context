import { useContext, useEffect } from "react"
import { ProductContext } from "../context/ProductsContext"
import { fetchProducts } from "../fetchProducts"
import Product from "./Product"
import { SelectorContext } from "../context/SelectorContext"
import { useContextSelector } from "use-context-selector"
import { OneContext } from "../context/OneContext"


const ProductList = () => {
    // const { products, setProducts } = useContext(ProductContext)
    // const { products, setProducts } = useContext(OneContext)
    
    const products = useContextSelector(
        SelectorContext,
        (state) => state.products
    )

    const setProducts = useContextSelector(
        SelectorContext,
        (state) => state.setProducts
    )

    const loadProducts = async () => {
        const loadedProducts = await fetchProducts()
        setProducts(loadedProducts)
    } 

    useEffect(() => {
        loadProducts()
    }, [])

    useEffect(() => {
        console.log("Rendering ProductList")
    }, [products])

    console.log("outside useEffect ProductList")
    console.log(products)

    return (
        <div style={{
            display: "flex",
        }}>
            
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            
        </div>
    )
}

export default ProductList