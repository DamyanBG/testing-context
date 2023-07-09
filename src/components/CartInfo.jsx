import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { ProductContext } from "../context/ProductsContext"
import { useContextSelector } from "use-context-selector"
import { SelectorContext } from "../context/SelectorContext"

const CartInfo = ({ handleOnClose }) => {
    // const { cart } = useContext(CartContext)
    // const { products } = useContext(ProductContext)

    // const { cart, products } = useContext(OneContext)

    const cart = useContextSelector(SelectorContext, (state) => state.cart)
    const products = useContextSelector(SelectorContext, (state) => state.products)

    const cartProducts = products.filter((product) => cart.some((c) => c === product?.id))

    useEffect(() => {
        console.log("Rendering CartInfo")
    })

    useEffect(() => {
        console.log("Initial Render CartInfo")
    }, [])

    console.log("render CartInfo")
    console.log(cart)

    return (
        <div>
            <article>
                <button type="button" onClick={handleOnClose}>Close</button>
            </article>
            <h2>Products in cart:</h2>
            {cartProducts.map((cartProduct) => (
                <p key={cartProduct.id}>{cartProduct.name}</p>
            ))}
        </div>
    )
}

export default CartInfo