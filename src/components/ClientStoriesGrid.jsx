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
    return stories.filter(story => {
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

      {/* iOS-style Full Stories - Single Column */}
      <div className="space-y-12 mb-16">
        {filteredStories.slice(0, visibleStories).map((story, index) => (
          <article 
            key={story.id} 
            className="group transition-all duration-500 hover:scale-[1.01] overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '32px',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.12),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Story Header with Image */}
            <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12">
              {/* Story Image */}
              <div className="lg:col-span-4">
                {story.image ? (
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(255, 255, 255, 0.6)' }}>
                    <Image 
                      src={`/TheLadder/photos/${story.image}`}
                      alt={`${story.name} - Success Story`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-3xl hidden items-center justify-center flex-col"
                      style={{
                        background: 'rgba(0, 122, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(0, 122, 255, 0.2)'
                      }}
                    >
                      <User className="w-16 h-16 mb-4" style={{ color: '#007AFF' }} />
                      <p className="text-base font-medium" style={{ color: '#007AFF' }}>{story.name}</p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="aspect-[4/3] rounded-3xl flex items-center justify-center flex-col"
                    style={{
                      background: 'rgba(0, 122, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 122, 255, 0.2)'
                    }}
                  >
                    <User className="w-16 h-16 mb-4" style={{ color: '#007AFF' }} />
                    <p className="text-base font-medium" style={{ color: '#007AFF' }}>{story.name}</p>
                  </div>
                )}
              </div>

              {/* Story Content */}
              <div className="lg:col-span-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="px-4 py-2 rounded-2xl text-sm font-semibold"
                        style={{
                          background: 'rgba(52, 199, 89, 0.1)',
                          color: '#34C759',
                          border: '1px solid rgba(52, 199, 89, 0.2)'
                        }}
                      >
                        {getCategoryIcon(story.category)} {story.category}
                      </div>
                      <div 
                        className="px-3 py-1.5 rounded-2xl text-sm font-medium"
                        style={{
                          background: 'rgba(255, 255, 255, 0.5)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          color: '#86868b'
                        }}
                      >
                        {story.timeframe}
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#1d1d1f' }}>
                      {story.title || `${story.name}'s Success Story`}
                    </h2>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < story.rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Situation */}
                <div 
                  className="p-6 rounded-3xl mb-8"
                  style={{
                    background: 'rgba(0, 122, 255, 0.05)',
                    border: '1px solid rgba(0, 122, 255, 0.1)'
                  }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#007AFF' }}>
                    The Situation
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    {story.situation}
                  </p>
                </div>

                {/* Full Quote */}
                <div className="relative mb-8">
                  <Quote className="w-12 h-12 absolute -top-3 -left-3 opacity-15" style={{ color: '#FF3B30' }} />
                  <blockquote 
                    className="text-xl lg:text-2xl leading-relaxed pl-8 italic font-medium"
                    style={{ color: '#1d1d1f' }}
                  >
                    "{story.quote}"
                  </blockquote>
                  <div className="mt-4 pl-8">
                    <cite className="text-lg font-semibold not-italic" style={{ color: '#007AFF' }}>
                      — {story.name}
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            {/* Barriers & Outcomes Section */}
            <div 
              className="p-8 lg:p-12"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Barriers */}
                <div 
                  className="p-6 rounded-3xl"
                  style={{
                    background: 'rgba(255, 59, 48, 0.05)',
                    border: '1px solid rgba(255, 59, 48, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6" style={{ color: '#FF3B30' }} />
                    <h3 className="text-xl font-bold" style={{ color: '#FF3B30' }}>
                      Barriers Faced
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {story.barriers.map((barrier, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: '#FF3B30' }}
                        />
                        <span className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                          {barrier}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div 
                  className="p-6 rounded-3xl"
                  style={{
                    background: 'rgba(52, 199, 89, 0.05)',
                    border: '1px solid rgba(52, 199, 89, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6" style={{ color: '#34C759' }} />
                    <h3 className="text-xl font-bold" style={{ color: '#34C759' }}>
                      Outcomes Achieved
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {story.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#34C759' }} />
                        <span className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Current Status */}
              {story.currentStatus && (
                <div 
                  className="mt-8 p-6 rounded-3xl text-center"
                  style={{
                    background: 'rgba(0, 122, 255, 0.05)',
                    border: '1px solid rgba(0, 122, 255, 0.1)'
                  }}
                >
                  <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: '#007AFF' }} />
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#007AFF' }}>
                    Current Status
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    {story.currentStatus}
                  </p>
                </div>
              )}

              {/* Partner Organizations */}
              {story.partnerOrganizations && story.partnerOrganizations.length > 0 && (
                <div className="mt-6 text-center">
                  <p className="text-sm" style={{ color: '#86868b' }}>
                    <strong style={{ color: '#1d1d1f' }}>Partner Organizations:</strong>{' '}
                    {story.partnerOrganizations.join(', ')}
                  </p>
                </div>
              )}
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

      {/* iOS-style Category Statistics - Mobile Hidden, Desktop Visible */}
      <div className="hidden lg:block mt-20">
        <div 
          className="p-12 rounded-3xl"
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
          <h3 className="text-3xl font-bold mb-10 text-center" style={{ color: '#1d1d1f' }}>
            Stories by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => {
              const count = stories.filter(story => story.category === category).length
              const percentage = Math.round((count / stories.length) * 100)
              return (
                <div 
                  key={category} 
                  className="text-center p-6 rounded-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: `
                      0 4px 16px rgba(0, 0, 0, 0.08),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `
                  }}
                >
                  <div className="text-3xl mb-3">{getCategoryIcon(category)}</div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#007AFF' }}>{count}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: '#1d1d1f' }}>
                    {category}
                  </div>
                  <div className="text-xs" style={{ color: '#86868b' }}>{percentage}%</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}