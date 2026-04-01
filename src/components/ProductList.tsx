import type { Product } from "../types"
import { formatPrice } from "../utils/format"

type Props = {
    products: Product[]
    onAdd: (productId: string) => void
}

function ProductList({ products, onAdd }: Props) {
    return (
        <div className="section">
            <h2>Products</h2>

            <div className="section-content">
                <div className="grid">
                    {products.map(product => (
                        <div key={product.id} className="card">
                            <p>{product.name}</p>
                            <p>{formatPrice(product.pricePence)}</p>
                            <button onClick={() => onAdd(product.id)}>
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList