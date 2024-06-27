'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
    productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart()

    return (
        <button
            type="button"
            onClick={() => addToCart(productId)}
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
            Add to cart
        </button>
    )
}