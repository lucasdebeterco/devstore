import { Search } from 'lucide-react'
import Link from 'next/link'

export function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    Devstore
                </Link>
                <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-offset-zinc-700">
                    <Search className="size-5 text-zinc-500" />

                    <input
                        placeholder="Search products..."
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
                    />
                </form>
            </div>
            <div className="flex items-center gap-4">

            </div>
        </div>
    )
}