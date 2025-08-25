'use client'

import { useState, useMemo } from 'react'
import { Quote, Calendar, MapPin, Filter, Search, ChevronDown, Heart, Star, CheckCircle, User, ArrowRight, Award, Clock, Target } from 'lucide-react'
import testimoniesData from '/src/data/testimonies.json'
import Image from 'next/image'

export default function ClientStoriesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleStories, setVisibleStories] = useState(3)

  // Use testimonies.json data instead
  const stories = testimoniesData.stories
  const categories = [...new Set(stories.map(story => story.category))]

  const filteredStories = useMemo(() => {
    const filtered = stories.filter(story => {
      const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory
      const matchesSearch = !searchTerm || 
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.barriers.some(barrier => barrier.toLowerCase().includes(searchTerm.toLowerCase())) ||
        story.outcomes.some(outcome => outcome.toLowerCase().includes(searchTerm.toLowerCase())) ||
        story.situation.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
    
    // Sort to prioritize stories with images first
    return filtered.sort((a, b) => {
      const aHasImage = a.image ? 1 : 0
      const bHasImage = b.image ? 1 : 0
      return bHasImage - aHasImage // Stories with images first
    })
  }, [stories, selectedCategory, searchTerm])

  const handleLoadMore = () => {
    setVisibleStories(prev => prev + 3)
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Transportation': '🚗',
      'Financial Assistance': '💰',
      'Emergency Housing': '🏠',
      'Recovery Support': '🌱',
      'Employment Support': '💼',
      'Crisis Support': '🆘',
      'Home Repair': '🔨',
      'Utility Assistance': '⚡'
    }
    return icons[category] || '❤️'
  }

  return (
    <div className="w-full">
      {/* iOS-style Search and Filter Controls */}
      <div className="mb-16">
        <div 
          className="p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#86868b' }} />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-base transition-all duration-300 focus:outline-none focus:ring-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#1d1d1f',
                  fontSize: '16px' // Prevent zoom on mobile
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-6 py-4 pr-12 rounded-2xl text-base font-medium transition-all duration-300 focus:outline-none focus:ring-0 min-w-[180px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#1d1d1f'
                  }}
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: '#86868b' }} />
              </div>

              <div 
                className="px-4 py-2 rounded-2xl text-sm font-medium"
                style={{
                  background: 'rgba(52, 199, 89, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#34C759',
                  border: '1px solid rgba(52, 199, 89, 0.2)'
                }}
              >
                {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iOS-style Condensed Stories - Single Column */}
      <div className="space-y-8 mb-16">
        {filteredStories.slice(0, visibleStories).map((story, index) => (
          <article 
            key={story.id} 
            className="group transition-all duration-300 hover:scale-[1.01] overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '24px',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.12),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Condensed Story Layout */}
            <div className="grid lg:grid-cols-3 gap-6 p-6">
              {/* Story Image - Smaller */}
              <div className="lg:col-span-1">
                {story.image ? (
                  <div className="relative aspect-square rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(255, 255, 255, 0.6)' }}>
                    <Image 
                      src={`/TheLadder/photos/${story.image}`}
                      alt={`${story.name} - Success Story`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl hidden items-center justify-center flex-col"
                      style={{
                        background: 'rgba(0, 122, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(0, 122, 255, 0.2)'
                      }}
                    >
                      <User className="w-8 h-8 mb-2" style={{ color: '#007AFF' }} />
                      <p className="text-sm font-medium" style={{ color: '#007AFF' }}>{story.name}</p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="aspect-square rounded-2xl flex items-center justify-center flex-col"
                    style={{
                      background: 'rgba(0, 122, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 122, 255, 0.2)'
                    }}
                  >
                    <User className="w-8 h-8 mb-2" style={{ color: '#007AFF' }} />
                    <p className="text-sm font-medium" style={{ color: '#007AFF' }}>{story.name}</p>
                  </div>
                )}
              </div>

              {/* Story Content - Condensed */}
              <div className="lg:col-span-2 space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="px-3 py-1 rounded-xl text-xs font-semibold"
                      style={{
                        background: 'rgba(52, 199, 89, 0.1)',
                        color: '#34C759',
                        border: '1px solid rgba(52, 199, 89, 0.2)'
                      }}
                    >
                      {getCategoryIcon(story.category)} {story.category}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < story.rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: '#1d1d1f' }}>
                    {story.title || `${story.name}'s Story`}
                  </h2>
                </div>

                {/* Quote - Condensed */}
                <div className="relative">
                  <Quote className="w-6 h-6 absolute -top-1 -left-1 opacity-20" style={{ color: '#FF3B30' }} />
                  <blockquote 
                    className="text-base leading-relaxed pl-5 italic"
                    style={{ color: '#4a5568' }}
                  >
                    "{story.quote.length > 200 ? `${story.quote.substring(0, 200)}...` : story.quote}"
                  </blockquote>
                  <cite className="text-sm font-semibold not-italic mt-2 block pl-5" style={{ color: '#007AFF' }}>
                    — {story.name}
                  </cite>
                </div>

                {/* Compact Barriers & Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Barriers - Compact */}
                  <div 
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(255, 59, 48, 0.05)',
                      border: '1px solid rgba(255, 59, 48, 0.1)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4" style={{ color: '#FF3B30' }} />
                      <h3 className="text-sm font-bold" style={{ color: '#FF3B30' }}>
                        Barriers
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: '#4a5568' }}>
                      {story.barriers.slice(0, 2).join(', ')}{story.barriers.length > 2 ? '...' : ''}
                    </p>
                  </div>

                  {/* Outcomes - Compact */}
                  <div 
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(52, 199, 89, 0.05)',
                      border: '1px solid rgba(52, 199, 89, 0.1)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4" style={{ color: '#34C759' }} />
                      <h3 className="text-sm font-bold" style={{ color: '#34C759' }}>
                        Success
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: '#4a5568' }}>
                      {story.currentStatus || story.outcomes[0]}
                    </p>
                  </div>
                </div>

                {/* Timeframe */}
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <span className="text-xs" style={{ color: '#86868b' }}>
                    <Clock className="w-3 h-3 inline mr-1" />
                    {story.timeframe}
                  </span>
                  <span className="text-xs" style={{ color: '#86868b' }}>
                    Birmingham, AL
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* iOS-style Load More Button */}
      {visibleStories < filteredStories.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(0, 122, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)'
            }}
          >
            Load More Stories ({filteredStories.length - visibleStories} remaining)
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}

      {/* iOS-style No Results */}
      {filteredStories.length === 0 && (
        <div className="text-center py-16">
          <div 
            className="p-12 max-w-md mx-auto rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.12),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'rgba(0, 122, 255, 0.1)',
                border: '1px solid rgba(0, 122, 255, 0.2)'
              }}
            >
              <Search className="w-8 h-8" style={{ color: '#007AFF' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1d1d1f' }}>No Stories Found</h3>
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#86868b' }}>
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(0, 122, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: '#007AFF',
                border: '1px solid rgba(0, 122, 255, 0.2)'
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

    </div>
  )
}