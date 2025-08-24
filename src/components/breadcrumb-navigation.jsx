'use client'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export default function BreadcrumbNavigation({ breadcrumbs }) {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.href ? `https://oemradiorepair.com${breadcrumb.href}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav 
        className="bg-surface-800/30 border-b border-primary-500/20" 
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-text-secondary mx-2" />
                )}
                {breadcrumb.href ? (
                  <Link
                    href={breadcrumb.href}
                    className="flex items-center text-text-secondary hover:text-primary-500 transition-colors"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {breadcrumb.name}
                  </Link>
                ) : (
                  <span className="flex items-center text-text-primary font-medium">
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {breadcrumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}