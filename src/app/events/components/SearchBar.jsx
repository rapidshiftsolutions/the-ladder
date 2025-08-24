'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function SearchBar({ initialSearchTerm = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = () => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      if (searchTerm) {
        params.set('search', searchTerm)
      } else {
        params.delete('search')
      }
      router.push(`/events?${params.toString()}`)
    })
  }

  const clearSearch = () => {
    setSearchTerm('')
    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      params.delete('search')
      router.push(`/events?${params.toString()}`)
    })
  }

  return (
    <div className="relative flex w-full md:w-1/3 xl:w-2/3 items-center">
      <div className="relative flex-1 min-w-[200px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search events..."
          className="w-full rounded-full border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="size-4" />
          </button>
        )}
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <MagnifyingGlassIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}
