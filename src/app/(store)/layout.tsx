import { ReactNode } from 'react'

import { Header } from '@/app/components/header'

export default function StoreLayout({children}: { children: ReactNode }) {
    return (
        <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
            <Header />
            {children}
        </div>
    )
}