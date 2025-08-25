"use client";

import * as Headless from '@headlessui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link({ href, target, rel, onClick, ...props }, ref) {
  // Check if it's an internal link (starts with / or #)
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
  
  // For internal links, use NextLink
  if (isInternal) {
    return (
      <Headless.DataInteractive>
        <NextLink ref={ref} href={href} target={target} onClick={onClick} {...props} />
      </Headless.DataInteractive>
    )
  }
  
  // For external links, use regular anchor tag with proper security attributes
  return (
    <Headless.DataInteractive>
      <a
        ref={ref}
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        onClick={onClick}
        {...props}
      />
    </Headless.DataInteractive>
  )
})
