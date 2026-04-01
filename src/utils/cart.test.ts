import { describe, expect, it } from "vitest"
import { calculateTotal } from "./cart"
import { products } from "../data/products"
import type { Cart } from "../types"

describe("calculateTotal", () => {
    it("calculates the total cost of 2 apples and 3 bananas", () => {
        const cart: Cart = {
            apple: 2,
            banana: 3,
        }

        const total = calculateTotal(products, cart)

        expect(total).toBe(210)
    })

    it("calculates the total cost for 1 cucumber and 2 dates", () => {
        const cart: Cart = {
            cucumber: 1,
            dates: 2,
        }

        const total = calculateTotal(products, cart)

        expect(total).toBe(390)
    })

    it("returns a total cost of 0 for an empty cart", () => {
        const cart: Cart = {}

        const total = calculateTotal(products, cart)

        expect(total).toBe(0)
    })
})