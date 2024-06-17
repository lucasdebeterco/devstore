import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

async function getFeaturedProducts(): Promise<Product[]> {
    const response = await api('/products/featured', {
        next: {
            revalidate: 60 * 60
        }
    })
    return await response.json()
}

export const metadata: Metadata = {
    title: 'Home'
}

export default async function Home() {
    const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

    return (
        <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
            <Link
                href={`/product/${highlightedProduct.slug}`}
                className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
            >
                <Image
                    src={highlightedProduct.image}
                    className="transition-transform duration-500 group-hover:scale-105"
                    width={920}
                    height={920}
                    quality={100}
                    alt=""
                />

                <div
                    className="absolute bottom-20 right-20 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                    <span className="truncate text-sm">{highlightedProduct.title}</span>
                    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                        {highlightedProduct.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0
                        })}
                    </span>
                </div>
            </Link>

            {otherProducts.map((product) => (
                <Link
                    href={`/product/${product.slug}`}
                    className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
                >
                    <Image
                        src={product.image}
                        width={920}
                        height={920}
                        quality={100}
                        alt=""
                        className="transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                        className="absolute bottom-8 right-8 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                        <span className="truncate text-sm">{product.title}</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                            {product.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0
                            })}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}