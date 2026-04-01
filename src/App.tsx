import { useEffect, useState } from "react"
import { products } from "./data/products"
import type { Cart as CartType } from "./types"
import { addItemToCart, decreaseItemQuantity, calculateTotal } from "./utils/cart"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
    const [cart, setCart] = useState<CartType>(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : {}
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const handleAdd = (productId: string) => {
        setCart(prev => addItemToCart(prev, productId))
    }

    const handleDecrease = (productId: string) => {
        setCart(prev => decreaseItemQuantity(prev, productId))
    }

    const total = calculateTotal(products, cart)

    return (
        <div>
            <h1>Mini Shopping Cart</h1>

            <div className="layout">
                <ProductList
                    products={products}
                    onAdd={handleAdd}
                />

                <Cart
                    products={products}
                    cart={cart}
                    onAdd={handleAdd}
                    onDecrease={handleDecrease}
                    total={total}
                />
            </div>
        </div>
    )
}

export default App