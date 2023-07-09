import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useContextSelector } from "use-context-selector"
import { SelectorContext } from "../context/SelectorContext"

const AddToCart = ({ id }) => {
    // const { setCart } = useContext(CartContext)

    const setCart = useContextSelector(SelectorContext, (state) => state.setCart)

    const handleOnClick = () => {
        setCart((cart) => [...cart, id])
    }

    return (
        <article>
            <button type="button" onClick={handleOnClick}>Add to cart</button>
        </article>
    )
}

export default AddToCart