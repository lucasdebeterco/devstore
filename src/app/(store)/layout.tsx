import { ReactNode } from 'react'

import { Header } from '@/app/components/header'

export default function StoreLayout({children}: { children: ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}