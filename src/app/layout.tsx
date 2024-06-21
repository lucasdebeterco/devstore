import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    title: {
        template: '%s | devstore',
        default: 'devstore'
    },
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html className={inter.variable} lang="en">
            <body className="text- bg-zinc-950 text-zinc-50 antialiased">{children}</body>
        </html>
    )
}
