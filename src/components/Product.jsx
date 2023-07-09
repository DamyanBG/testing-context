import { useEffect } from "react"
import AddToCart from "./AddToCart"

const Product = ({ id, name, image, price }) => {
    useEffect(() => {
        console.log("Initial render product id " + id)
    }, [])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: "10vh",
                width: "20vw",
                border: "1px solid black",
                padding: "12px",
                margin: "24px"
            }}
            key={name}
        >
            <h1>{name}</h1>
            <article style={{ width: "50%" }}>
                <img src={image} alt="Product image" style={{ width: "100%" }} />
            </article>
            <p>${price}</p>
            <AddToCart id={id} />
        </div>
    )
}

export default Product