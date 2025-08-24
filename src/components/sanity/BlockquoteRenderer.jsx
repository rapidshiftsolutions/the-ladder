'use client'

import React from 'react'
import { PortableText } from '@portabletext/react'

// A custom blockquote component that ensures valid HTML structure
const BlockquoteRenderer = ({ value }) => {
  return (
    <blockquote className="pl-4 border-l-4 border-gray-300 italic my-6">
      {value.children.map((child, i) => {
        // If it's just text, render it directly
        if (typeof child === 'string') {
          return <p key={i} className="text-gray-700">{child}</p>
        }
        
        // If it has marks or other complex structures, use appropriate tags
        if (child.marks && child.marks.length > 0) {
          return (
            <p key={i} className="text-gray-700">
              <span className={child.marks.join(' ')}>{child.text}</span>
            </p>
          )
        }
        
        return <p key={i} className="text-gray-700">{child.text}</p>
      })}
    </blockquote>
  )
}

export default BlockquoteRenderer
