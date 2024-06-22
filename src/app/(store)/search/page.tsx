import Image from 'next/image'
import Link from 'next/link'

export default async function Search() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para: <span className="font-semibold"></span>
            </p>

            <div className="grid grid-cols-3 gap-6">
                <Link
                    href={`/product/moletom-never-stop-learning`}
                    className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
                >
                    <Image
                        src="/moletom-never-stop-learning.png"
                        width={480}
                        height={480}
                        quality={100}
                        alt=""
                        className="transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                        className="absolute bottom-8 right-8 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                        <span className="truncate text-sm">Moletom</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                            {Number(129).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0
                            })}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}