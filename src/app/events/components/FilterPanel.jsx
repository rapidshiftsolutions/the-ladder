'use client'

import { useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { Button } from '/src/components/button'
import SearchBar from './SearchBar'

export default function FilterPanel({ categories, years, selectedCategory, selectedYear, searchTerm }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const applyFilter = (type, value) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      
      if (value) {
        params.set(type, value)
      } else {
        params.delete(type)
      }
      
      params.delete('page') // Reset to first page when changing filters
      router.push(`/events?${params.toString()}`)
    })
  }

  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center w-full bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm">
      <SearchBar initialSearchTerm={searchTerm} />
      
      <div className="flex space-x-3 items-center">
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center justify-between gap-2 px-4 py-2 text-sm rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            {selectedCategory ? 
              categories.find(c => c.slug?.current === selectedCategory)?.title : 
              'All categories'}
            <ChevronUpDownIcon className="size-4 fill-gray-600" />
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px] z-10"
          >
            <MenuItem>
              <button
                onClick={() => applyFilter('category', null)}
                data-selected={selectedCategory === undefined ? true : undefined}
                className="group w-full text-left grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text-sm/6">All categories</p>
              </button>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.slug?.current}>
                <button
                  onClick={() => applyFilter('category', category.slug?.current)}
                  data-selected={category.slug?.current === selectedCategory ? true : undefined}
                  className="group w-full text-left grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-950/5"
                >
                  <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                  <p className="col-start-2 text-sm/6">{category.title}</p>
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
        
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center justify-between gap-2 px-4 py-2 text-sm rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            {selectedYear || 'All years'}
            <ChevronUpDownIcon className="size-4 fill-gray-600" />
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            className="min-w-32 overflow-y-auto max-h-[16rem] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px] z-10"
          >
            <MenuItem>
              <button
                onClick={() => applyFilter('year', null)}
                data-selected={selectedYear === undefined ? true : undefined}
                className="group w-full text-left grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text-sm/6">All years</p>
              </button>
            </MenuItem>
            {years.map((year) => (
              <MenuItem key={year}>
                <button
                  onClick={() => applyFilter('year', year)}
                  data-selected={year === selectedYear ? true : undefined}
                  className="group w-full text-left grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-gray-950/5"
                >
                  <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                  <p className="col-start-2 text-sm/6">{year}</p>
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      
      </div>
    </div>
  )
}
