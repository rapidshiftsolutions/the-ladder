"use client"

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Example() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="fixed inset-x-0 bottom-0 z-[999]">
        <div className="flex items-center gap-x-6 bg-primary-900 opacity-90 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <p className="text-sm/6 text-white">
            <a href="/contact-us">
              Our offices will be closed on Thursday, June 19th, in observance of Juneteenth.
            </a>
          </p>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
