import Image from 'next/image'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

interface ProductProps {
    params: {
        slug: string
    }
}

async function getProduct(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 60 * 60
        }
    })
    return await response.json()
}


export default async function ProductPage({ params }: ProductProps) {
    const product = await getProduct(params.slug)

    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src={product.image}
                    alt=""
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>

            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-bold leading-tight">
                    {product.title}
                </h1>

                <p className="mt-2 leading-relaxed text-zinc-400">
                    {product.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
                        {product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0
                        })}
                    </span>
                    <span className="text-sm text-zinc-400">
                        In 12 parcels with no interests of {(product.price / 12).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        })}
                    </span>
                </div>

                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">
                            Tamanhos
                    </span>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
                        >
                            P
                        </button>
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
                >
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}