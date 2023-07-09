import { useEffect, useState } from "react"
import CartInfo from "./CartInfo"

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        console.info("Render Cart")
    })

    return (
        <div>
            <article>
                <button type="button" onClick={() => setIsOpen(true)}>
                    Open Cart
                </button>
            </article>
           
                {isOpen && <CartInfo handleOnClose={() => setIsOpen(false)} />}
            
        </div>
    )
}

export default Cart