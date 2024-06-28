'use client'

import { useSearchParams } from 'next/navigation'

import { Skeleton } from '@/app/components/skeleton'

export default function SearchLoading() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Results for: <span className="font-semibold">{query ?? ''}</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
            </div>
        </div>
    )
}