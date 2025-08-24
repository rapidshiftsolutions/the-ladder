import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <Search className="w-24 h-24 text-accent-gray mx-auto mb-4" />
          <h1 className="text-4xl font-anton font-black text-text-primary mb-4">
            Special Not Found
          </h1>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            The special you're looking for doesn't exist or may have expired.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/specials"
            className="inline-flex items-center justify-center bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View All Specials
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-background transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}