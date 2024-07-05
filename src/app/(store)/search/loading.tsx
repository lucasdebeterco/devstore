'use client'

import { Skeleton } from '@/app/components/skeleton'

export default function SearchLoading() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Results for:
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