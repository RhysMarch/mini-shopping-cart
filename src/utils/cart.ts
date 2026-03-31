import type {Cart, Product} from "../types"

export function addItemToCart(cart: Cart, productId: string): Cart {
    const existingQuantity = cart[productId] ?? 0
    const updatedQuantity = existingQuantity + 1

    return {
        ...cart,
        [productId]: updatedQuantity,
    }
}

export function decreaseItemQuantity(cart: Cart, productId: string): Cart {
    const existingQuantity = cart[productId] ?? 0

    if (existingQuantity <= 1) {
        const updatedCart = { ...cart }
        delete updatedCart[productId]
        return updatedCart
    }

    const updatedQuantity = existingQuantity - 1

    return {
        ...cart,
        [productId]: updatedQuantity,
    }
}

export function getItemQuantity(cart: Cart, productId: string): number {
    const quantity = cart[productId]

    if (quantity === undefined) {
        return 0
    }

    return quantity
}

export function calculateSubtotal(price: number, quantity: number): number {
    return price * quantity
}

export function calculateTotal(products: Product[], cart: Cart): number {
    let total = 0

    for (const product of products) {
        const quantity = getItemQuantity(cart, product.id)

        if (quantity > 0) {
            total += calculateSubtotal(product.price, quantity)
        }
    }

    return total
}