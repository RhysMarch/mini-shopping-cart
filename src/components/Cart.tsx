import type { Cart as CartType, Product } from "../types"
import { formatPrice } from "../utils/format"

type Props = {
    products: Product[]
    cart: CartType
    onAdd: (productId: string) => void
    onDecrease: (productId: string) => void
    total: number
}

function Cart({ products, cart, onAdd, onDecrease, total }: Props) {
    const items = products.filter(p => cart[p.id] > 0)

    return (
        <div className="section">
            <h2>Cart</h2>

            <div className="section-content">
                {items.length === 0 && <h4>No items yet</h4>}

                {items.map(product => {
                    const quantity = cart[product.id]
                    const subtotal = product.pricePence * quantity

                    return (
                        <div key={product.id} className="card cart-item-card">
                            <div>
                                <p>{product.name}</p>
                                <p>{formatPrice(subtotal)}</p>
                            </div>

                            <div>
                                <button onClick={() => onDecrease(product.id)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => onAdd(product.id)}>+</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <hr />

            <div className="cart-footer">
                <h3>Total: {formatPrice(total)}</h3>
            </div>
        </div>
    )
}

export default Cart